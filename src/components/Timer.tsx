import './Timer.css';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  hh: number;
  mm: number;
  ss: number;
  isOver?: boolean;
};

/**
 * 남은 시간을 넘겨주면 표시해 주는 컴포넌트
 */
function Timer({ hh, mm, ss, isOver }: Props) {
  const [hours, setHours] = useState(hh);
  const [minutes, setMinutes] = useState(mm);
  const [seconds, setSeconds] = useState(ss);
  const [isTimeOver, setIsTimeOver] = useState(isOver);
  const { location } = useHistory();

  const setPadding = useCallback((value: number) => {
    return value.toString().padStart(2, '0');
  }, []);

  // 새로 값 들어오면 초기화
  useEffect(() => {
    // console.info(`timer rerender`);
    setHours(hh);
    setMinutes(mm);
    setSeconds(ss);
  }, [hh, mm, ss]);

  // 타이머
  useEffect(() => {
    const interval = -1;
    const countdown = setInterval(() => {
      if (isTimeOver) {
        return;
      }

      if (seconds > 0) {
        setSeconds(seconds + interval);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            setIsTimeOver(true);
            clearInterval(countdown);
          } else {
            setHours(hours + interval);
            setMinutes(59);
            setSeconds(59);
          }
          clearInterval(countdown);
        } else {
          setMinutes(minutes + interval);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [minutes, seconds, hours, isTimeOver]);

  return (
    <div className="timer">
      <div className={`timer__content${isTimeOver ? ' over' : ''}`}>
        <span className="timer__hour">{setPadding(hours)}</span>
        <span>:</span>
        <span className="timer__min">{setPadding(minutes)}</span>
        <span>:</span>
        <span className="timer__sec">{setPadding(seconds)}</span>
      </div>
      {isTimeOver ? (
        <h2>
          {location.search.length > 3
            ? decodeURI(atob(location.search.substr(3)))
            : `퇴근합시다!`}
        </h2>
      ) : null}
    </div>
  );
}

Timer.defaultProps = {
  isOver: false,
};

export default Timer;
