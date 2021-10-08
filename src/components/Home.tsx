/* eslint-disable no-restricted-globals */
import './Home.css';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import Timer from './Timer';
import useTimeActions from '../hooks/useMyActions';
import useTime from '../hooks/useMyState';

type MatchParams = {
  input: string;
};

type Props = {
  isDefault?: boolean;
};

const HALF_DAY = 43200;

function Home({ isDefault }: Props) {
  const match = useRouteMatch<MatchParams>();
  const { input } = match?.params as MatchParams;
  const { initTime } = useTimeActions();
  const { flag, time } = useTime();
  const [toggleState, setToggleState] = useState(false);
  const [viewState, setViewState] = useState<JSX.Element>();

  const convertS2HMS = useCallback((seconds: number) => {
    const duration = moment.duration(seconds, 'seconds');

    const hour = duration.get('hours');
    const min = duration.get('minutes');
    const sec = duration.get('seconds');

    return { hour, min, sec };
  }, []);

  const viewTimer = useCallback((): JSX.Element => {
    if (time === 'invalid') {
      return <h1 className="wow">실험 정신이 대단하군요..!</h1>;
    }

    let hh = 0;
    let mm = 0;
    let endTime;
    const now = moment();

    if (isDefault) {
      endTime = moment(
        `${Number(time.substr(0, 2))}:${Number(time.substr(2, 2))}`,
        'hh:mm'
      );
    } else {
      hh = Number(time.substr(0, 2));
      mm = Number(time.substr(2, 2));
      endTime = moment(`${hh}:${mm}`, 'hh:mm');
    }

    const diffSec = endTime.diff(now, 'seconds');

    const { hour, min, sec } = convertS2HMS(diffSec);

    if (diffSec < 0 && diffSec + HALF_DAY > 0) {
      return (
        <Timer
          hh={Math.abs(hour)}
          mm={Math.abs(min)}
          ss={Math.abs(sec)}
          isOver
        />
      );
    }

    if (diffSec < 0) {
      // console.info('새벽에 근무하는 사람들을 위한..1');

      const diffSec2 = endTime.clone().add(1, 'd').diff(now, 'seconds');

      const { hour: hour2, min: min2, sec: sec2 } = convertS2HMS(diffSec2);
      return <Timer hh={hour2} mm={min2} ss={sec2} />;
    }

    if (diffSec > HALF_DAY) {
      // console.info('새벽에 근무하는 사람들을 위한..2');

      const diffSec2 = endTime.clone().add(-1, 'd').diff(now, 'seconds');

      const { hour: hour2, min: min2, sec: sec2 } = convertS2HMS(diffSec2);
      return (
        <Timer
          hh={Math.abs(hour2)}
          mm={Math.abs(min2)}
          ss={Math.abs(sec2)}
          isOver
        />
      );
    }

    return <Timer hh={hour} mm={min} ss={sec} />;
  }, [convertS2HMS, isDefault, time]);

  useEffect(() => {
    // 초기화
    if (!flag && input) {
      initTime(input);
    }
  }, [flag, initTime, input]);

  // 1분마다 시간 동기화
  useEffect(() => {
    const sto = setTimeout(() => {
      setToggleState((prev) => !prev);
      setViewState(viewTimer());
    }, 60 * 1000);

    return () => {
      clearTimeout(sto);
    };
  }, [toggleState, viewState, viewTimer]);

  // 최초 타이머 초기화
  useEffect(() => {
    setViewState(viewTimer());
  }, [viewTimer]);

  return (
    <div className="home">
      <span>퇴근시간 {time === 'invalid' ? input : time} 까지...</span>

      {viewState}
    </div>
  );
}

Home.defaultProps = {
  isDefault: false,
};

export default Home;
