

import { UserProfileType } from '../../interfaces'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { wrapper } from '../../redux/redux-store'
import { usersActions } from '../../redux/actions/users'
import { GetServerSideProps } from 'next'

type PropsType = {
  item?: UserProfileType
  errors?: string
}

const SSPPropsDetail = ({ item, errors }: PropsType) => {
 
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example + Redux + Redux Saga">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.fullName : 'User Detail'
      } | Next.js + TypeScript Example + Redux + Redux Saga`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default SSPPropsDetail

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store, params }) => {
  if (!store.getState().users.profile) {
    store.dispatch(usersActions.loadUsers())
  }
  await store.sagaTask.toPromise()
  try {
    const id = params?.id
    const item = store.getState().users.profile?.find((data: UserProfileType) => data.id === Number(id))
    return { props: { item } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
 
})
