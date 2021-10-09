import moment from 'moment';

export const secondToDuration = (seconds: number) => {
  return moment.duration(seconds, 'seconds');
};
