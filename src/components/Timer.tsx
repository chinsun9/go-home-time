/* eslint-disable no-new */
import './Timer.css';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Duration } from 'moment';
import useTimeActions from '../hooks/useMyActions';
import useTime from '../hooks/useMyState';
import { TimerState } from '../types';
import { durationToHMS } from '../utils/durationToHMS';

type Props = TimerState;

const ONE_SECOND = 1000;

/**
 * 남은 시간을 넘겨주면 표시해 주는 컴포넌트
 */
function Timer({ duration: initialDuration, isOver }: Props) {
  const [duration, setDuration] = useState<Duration>(
    isOver ? initialDuration.abs() : initialDuration
  );
  const [isTimeOver, setIsTimeOver] = useState(isOver);
  const { location } = useHistory();
  const { msg } = useTime();
  const { initMsg } = useTimeActions();
  const advanceNotice = useRef(true);

  const padNumber = useCallback((value: number) => {
    return value.toString().padStart(2, '0');
  }, []);

  useEffect(() => {
    console.log(`init msg`);
    initMsg(Buffer.from(location.search.substr(3), 'base64').toString('utf-8'));
  }, [initMsg, location.search]);

  useEffect(() => {
    console.log(`sync`);
    setDuration(initialDuration);
    setIsTimeOver(isOver);
  }, [isOver, initialDuration]);

  useEffect(() => {
    let countdown: ReturnType<typeof setTimeout>;

    const run = () => {
      if (isTimeOver) return;
      const seconds = duration.asSeconds();

      if (seconds <= 0) {
        console.log('go home');

        if (Notification.permission === 'granted') new Notification(msg);

        setIsTimeOver(true);
        return;
      }

      // 3분전 알림
      if (advanceNotice.current && seconds <= 60 * 3 && seconds >= 60 * 2) {
        advanceNotice.current = false;
        if (Notification.permission === 'granted')
          new Notification('퇴근 3분전! 짐을 싸세요!');
      }

      countdown = setTimeout(() => {
        setDuration((prev) => prev?.clone().subtract(1, 'seconds'));
      }, ONE_SECOND);
    };

    run();

    return () => {
      if (countdown) clearTimeout(countdown);
    };
  }, [duration, isTimeOver, msg]);

  const { hour, min, sec } = durationToHMS(duration);

  return (
    <div className="timer">
      <div className={`timer__content${isTimeOver ? ' over' : ''}`}>
        <span className="timer__hour">{padNumber(hour)}</span>
        <span>:</span>
        <span className="timer__min">{padNumber(min)}</span>
        <span>:</span>
        <span className="timer__sec">{padNumber(sec)}</span>
      </div>
      {isTimeOver ? <h2>{msg}</h2> : null}
    </div>
  );
}

Timer.defaultProps = {
  isOver: false,
};

export default Timer;
