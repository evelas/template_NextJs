import { combineReducers } from "redux";
import users from './users';
import test from './test';

const reducers = combineReducers({
  users,
  test
})

type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>;


// eslint-disable-next-line
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
  ? U
  : never;
export default reducers
