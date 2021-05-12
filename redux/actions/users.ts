import { UserProfileType } from './../../interfaces/index';

export const TypesUsers = {
  FAILURE: '/reducers/users/FAILURE' as const,
  SET_USER_DATA: '/reducers/users/SET_USER_DATA' as const,
  LOAD_USERS: '/reducers/users/LOAD_USERS' as const,
  __NEXT_REDUX_WRAPPER_HYDRATE__: '__NEXT_REDUX_WRAPPER_HYDRATE__' as const,
}

export const usersActions = {

  setUserData: (profile: Array<UserProfileType>) => ({
    type: TypesUsers.SET_USER_DATA,
    payload: {
      profile
    }
  }),

  loadUsers: () => ({
    type: TypesUsers.LOAD_USERS
  }),

  failure: (error: boolean) => ({
    type: TypesUsers.FAILURE,
    payload: {
      error
    }
  })
  
}
