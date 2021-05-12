

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

const StaticPropsDetail = ({ item, errors }: PropsType) => {
  console.log(item)
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

export default StaticPropsDetail


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store, params }) => {
  if (!store.getState().users.profile) {
    store.dispatch(usersActions.loadUsers())
   
  }
  await store.sagaTask.toPromise()
  try {
    const id = params?.id
    const item = store.getState().users.profile?.find((data: any) => data.id === Number(id))
    return { props: { item } }
    
  } catch (err) {
    return { props: { errors: err.message } }
  }
 
})

// TODO:
// https://stackoverflow.com/questions/57649207/adding-properties-to-created-redux-store-in-typescript