
import Link from 'next/link'
import Layout from '../../components/Layout'
 
import { wrapper } from '../../redux/redux-store'
import { usersActions } from '../../redux/actions/users'
import List from '../../components/List'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../redux/reducers'



const WithStaticProps = () => {

  const { profile } = useSelector((state: AppStateType) => state.users);
  const  test  = useSelector((state: any) => state.users);
  console.log(test)
  return (
    <Layout title="Users List | Next.js + TypeScript Example + Redux + Redux Saga">
      <h1>Users List</h1>
      <p>
        Example redux-saga data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
       <List items={profile} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
  

}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().users.profile) {
    store.dispatch(usersActions.loadUsers())
 
  }
  await store.sagaTask.toPromise()
})

export default WithStaticProps
