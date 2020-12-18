/* eslint-disable no-restricted-globals */
import './Home.css';
import React, { useEffect } from 'react';
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

function Home({ isDefault }: Props) {
  const now = moment();
  let endTime;

  const match = useRouteMatch<MatchParams>();
  const { input } = match?.params as MatchParams;

  const { initTime } = useTimeActions();
  const { flag, time } = useTime();

  useEffect(() => {
    if (!flag && input) {
      initTime(input);
    }
  }, [flag, initTime, input]);

  const convertS2HMS = (seconds: number) => {
    const hour = parseInt(`${seconds / 3600}`, 10);
    const min = parseInt(`${(seconds % 3600) / 60}`, 10);
    const sec = Math.floor(seconds % 60);

    return { hour, min, sec };
  };

  const viewTimer = () => {
    let hh = 0;
    let mm = 0;

    if (isDefault) {
      // console.info(time);
      endTime = moment(
        `${Number(time.substr(0, 2))}:${Number(time.substr(2, 2))}`,
        'hh:mm'
      );
    } else {
      if (isNaN(Number(input)) || input.length > 4 || input.length === 3) {
        // console.info(`invaild`);
        return null;
      }

      hh = Number(input.substr(0, 2));

      if (input.length === 4) {
        mm = Number(input.substr(2, 2));
      }

      endTime = moment(`${hh}:${mm}`, 'hh:mm');
    }

    const diffSec = endTime.diff(now, 'seconds');

    const { hour, min, sec } = convertS2HMS(diffSec);

    // -43200초 === 12시간
    if (diffSec < 0 && diffSec > -43200) {
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
      // console.info('새벽에 근무하는 사람들을 위한..');

      const diffSec2 = endTime.clone().add(1, 'd').diff(now, 'seconds');

      const { hour: hour2, min: min2, sec: sec2 } = convertS2HMS(diffSec2);
      return <Timer hh={hour2} mm={min2} ss={sec2} />;
    }

    return <Timer hh={hour} mm={min} ss={sec} />;
  };

  return (
    <div className="home">
      <span>퇴근시간 {time} 까지...</span>

      {viewTimer()}
    </div>
  );
}

Home.defaultProps = {
  isDefault: false,
};

export default Home;
