import { Duration } from 'moment';

export type TimerState = {
  duration: Duration;
  isOver?: boolean;
};
