import { UserProfileType } from './../../interfaces/index';
import { TypesUsers } from './../actions/users';
import { usersAPI, ApiTypes } from './../../pages/api/users/index';
import * as Effects from "redux-saga/effects";
import { usersActions } from '../actions/users';
import { resultCodeEnum } from '../../enum/resultCode';
import { END } from '@redux-saga/core'

// get users
async function getUsersData() {
  const response = await usersAPI.getUsers()
  return response.data;
}

export function* workerGetUsers(): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes<Array<UserProfileType>> = yield Effects.call(getUsersData);
    if (data.resultCode === resultCodeEnum.Success) {
      yield Effects.put(usersActions.setUserData(data.items));
      yield Effects.put(END)
    }
  } catch (err) {
    yield Effects.put(usersActions.failure(err));
  }
}

export function* watchGetUsers() {
  yield Effects.takeLatest(TypesUsers.LOAD_USERS, workerGetUsers);
}


