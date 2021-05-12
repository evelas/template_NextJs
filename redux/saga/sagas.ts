import { all } from 'redux-saga/effects';
import { watchGetUsers } from './users';

export default function* rootSaga() {
  yield all([
    watchGetUsers(),
  ]);
}
