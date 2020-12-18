/* eslint-disable no-console */
import './Timer.css';
import React, { useEffect, useState } from 'react';

type Props = {
  hh: number;
  mm: number;
  ss: number;
  isOver?: boolean;
};

function Timer({ hh, mm, ss, isOver }: Props) {
  //

  const [hours, setHours] = useState(hh);
  const [minutes, setMinutes] = useState(mm);
  const [seconds, setSeconds] = useState(ss);
  const [isTimeOver, setIsTimeOver] = useState(isOver);

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

  const setPadding = (value: number) => {
    const padding = '00';

    return (padding + value).substr(-2);
  };

  return (
    <div className="timer">
      <div className={`timer__content ${isTimeOver ? 'over' : ''}`}>
        <span className="timer__hour">{setPadding(hours)}</span>
        <span>:</span>
        <span className="timer__min">{setPadding(minutes)}</span>
        <span>:</span>
        <span className="timer__sec">{setPadding(seconds)}</span>
      </div>
      {isTimeOver ? <h2>퇴근합시다!</h2> : null}
    </div>
  );
}

Timer.defaultProps = {
  isOver: false,
};

export default Timer;
