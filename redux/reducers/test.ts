import { TypesTest } from './../actions/test';
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  testUser: null as Array<any> | null,
  isFetching: false
}

const testReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.test }
    }
    case TypesTest.IS_FETCHING:
      return { 
        ...state,
        ...{ isFetching: true } ,
      };

    default:
      return state
  }
}

export default testReducer