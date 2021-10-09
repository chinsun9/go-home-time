import { Duration } from 'moment';

export const durationToHMS = (duration: Duration) => {
  const hour = duration.get('hours');
  const min = duration.get('minutes');
  const sec = duration.get('seconds');

  return { hour, min, sec };
};
