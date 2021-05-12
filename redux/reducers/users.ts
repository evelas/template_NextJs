// import { InferActionsTypes } from './index';
import { UserProfileType } from './../../interfaces/index';
import { TypesUsers } from './../actions/users';
import { HYDRATE } from 'next-redux-wrapper'

// export type InitialStateUsersType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof usersActions>;

const initialState = {
  users: null as Array<any> | null,
  error: false
}

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }
    case TypesUsers.SET_USER_DATA:
      return { 
        ...state,
        ...{ users: action.payload.profile } ,
      };
    case TypesUsers.FAILURE:
      return {
        ...state,
        ...{ error: action.payload },
      }
    default:
      return state
  }
}

export default usersReducer