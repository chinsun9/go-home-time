/* eslint-disable no-restricted-globals */
import './Home.css';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import moment from 'moment';
import Timer from './Timer';
import useTimeActions from '../hooks/useMyActions';
import useTime from '../hooks/useMyState';
import { secondToDuration } from '../utils/secondToDuration';
import { TimerState } from '../types';

type MatchParams = {
  input: string;
};

const HALF_DAY = 43200;
const ONE_MIN = 60 * 1000;

function Home() {
  const match = useRouteMatch<MatchParams>();
  const { input } = match?.params as MatchParams;
  const { initTime } = useTimeActions();
  const { flag, time } = useTime();
  const [timerState, setTimerState] = useState<TimerState>();
  const history = useHistory();

  const getHMS = useCallback((): TimerState => {
    const endTime = moment(
      `${Number(time.substr(0, 2))}:${Number(time.substr(2, 2))}`,
      'hh:mm'
    );
    const now = moment();
    const diffSec = endTime.diff(now, 'seconds');

    if (diffSec < 0 && diffSec + HALF_DAY > 0) {
      return { duration: secondToDuration(diffSec), isOver: true };
    }

    if (diffSec < 0 || diffSec > HALF_DAY) {
      console.info('새벽에 근무하는 사람들을 위한...');
      const isOver = !(diffSec < 0);
      console.log({ isOver });
      return {
        duration: secondToDuration(
          endTime
            .clone()
            .add(isOver ? -1 : 1, 'd')
            .diff(now, 'seconds')
        ),
        isOver,
      };
    }

    return {
      duration: secondToDuration(diffSec),
    };
  }, [time]);

  // 초기화
  useEffect(() => {
    if (!flag) {
      initTime(input || '1800');
    }
  }, [flag, history, initTime, input, time]);

  // 최초 타이머 초기화
  useEffect(() => {
    if (flag) {
      console.log('init');
      history.replace(`/${time}${history.location.search}`);
      setTimerState(getHMS());
    }
  }, [getHMS, flag, history, time]);

  // 1분마다 시간 동기화
  useEffect(() => {
    const sto = setTimeout(() => {
      setTimerState(getHMS());
    }, ONE_MIN);

    return () => {
      clearTimeout(sto);
    };
  }, [timerState, getHMS]);

  return (
    <div className="home">
      <span>퇴근시간 {time === 'invalid' ? input : time} 까지...</span>

      {time === 'invalid' && <h1 className="wow">실험 정신이 대단하군요..!</h1>}
      {time !== 'invalid' && timerState && (
        <Timer duration={timerState.duration} isOver={timerState.isOver} />
      )}
    </div>
  );
}

export default Home;
