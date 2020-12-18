import { createReducer } from 'typesafe-actions';
import { SET_TIME } from './actions';
import { TimeAction } from './types';

// 초깃값 설정
const initialState: TimeState = { time: '1800', flag: false };

const timeReducer = createReducer<TimeState, TimeAction>(initialState, {
  [SET_TIME]: (state, { payload: time }) => {
    let newTime = time;
    if (time.length < 4) {
      newTime = `${time.substr(0, 2)}00`;
    }
    return { flag: true, time: newTime };
  },
});

export default timeReducer;
