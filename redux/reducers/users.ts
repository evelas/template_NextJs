import { UserProfileType, Nullable } from './../../interfaces/index';
import { TypesUsers } from './../actions/users';
import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction } from 'redux';

export type InitialStateUsersType = typeof initialState;

const initialState = {
  profile: null as Nullable<Array<UserProfileType>> ,
  error: false
}

const usersReducer = (state = initialState, action: AnyAction): InitialStateUsersType => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.users }
    }
    case TypesUsers.SET_USER_DATA:
      return { 
        ...state,
        profile: action.payload.profile,
      };
    case TypesUsers.FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default usersReducer