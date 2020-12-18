import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TimeAction = ActionType<typeof actions>;
