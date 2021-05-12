
import Link from 'next/link'
import Layout from '../../components/Layout'
 
import { wrapper } from '../../redux/redux-store'
import { usersActions } from '../../redux/actions/users'
import List from '../../components/List'
import { useSelector } from 'react-redux'



const WithStaticProps = () => {

  const { users } = useSelector((state: any) => state);
  console.log(users)
  return (
    <Layout title="Users List | Next.js + TypeScript Example + Redux + Redux Saga">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
       <List items={users} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
  

}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().users) {
    store.dispatch(usersActions.loadUsers())
 
  }
  await store.sagaTask.toPromise()
})

export default WithStaticProps
