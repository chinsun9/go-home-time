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
    const numberTime = Number(time);

    const isInvalidTime =
      Number.isNaN(numberTime) ||
      time.length > 4 ||
      numberTime > 2400 ||
      numberTime < 0;

    return {
      ...state,
      flag: true,
      time: isInvalidTime
        ? 'invalid'
        : `${time.padStart(2, '0').padEnd(4, '0')}`,
    };
  },
  [SET_MSG]: (state, { payload: msg }) => {
    if (!msg) return state;

    return { ...state, msg };
  },
});

export default timeReducer;
