// import { UserProfileType } from './../../interfaces/index';
import { TypesUsers } from './../actions/users';
import { usersAPI } from './../../pages/api/users/index';
import * as Effects from "redux-saga/effects";
import { usersActions } from '../actions/users';
// import { resultCodeEnum } from '../../enum/resultCode';
import { END } from '@redux-saga/core'

// get users
async function getUsersData() {
  const response = await usersAPI.getUsers()
  return response.data;
}

export function* workerGetUsers(): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: any = yield Effects.call(getUsersData);
    console.log(data, '12312312321')
    yield Effects.put(usersActions.setUserData(data));
    yield Effects.put(END)
   
  } catch (err) {
    yield Effects.put(usersActions.failure(err));
  }
}

export function* watchGetUsers() {
  yield Effects.takeLatest(TypesUsers.LOAD_USERS, workerGetUsers);
}
