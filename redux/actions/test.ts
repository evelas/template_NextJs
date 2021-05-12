

export const TypesTest= {
  IS_FETCHING: '/reducers/test/IS_FETCHING' as const,

}

export const testActions = {



  loadUsers: () => ({
    type: TypesTest.IS_FETCHING
  }),


  
}
