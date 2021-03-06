import { createReducer } from 'typesafe-actions';
import { SET_MSG, SET_TIME } from './actions';
import { TimeAction } from './types';

// 초깃값 설정
const initialState: TimeState = {
  time: '1800',
  flag: false,
  msg: `퇴근합시다!`,
};

const timeReducer = createReducer<TimeState, TimeAction>(initialState, {
  [SET_TIME]: (state, { payload: time }) => {
    // console.info(`i'm reducer`);
    let newTime = time;
    const numberTime = Number(time);
    const stringTime = numberTime.toString();

    if (
      Number.isNaN(numberTime) ||
      time.length > 4 ||
      numberTime > 2400 ||
      numberTime < 0
    ) {
      return { ...state, flag: true, time: 'invalid' };
    }

    if (time.length < 4) {
      newTime = `${stringTime.padEnd(4, '0')}`;
    }

    return { ...state, flag: true, time: newTime };
  },
  [SET_MSG]: (state, { payload: msg }) => {
    if (!msg) return state;

    return { ...state, msg };
  },
});

export default timeReducer;
