import { createAction } from 'typesafe-actions';

// 액션 type
export const SET_TIME = 'time/SET_USER';

// 액션 생성 함수
export const setTime = createAction(SET_TIME)<string>();
