import * as React from 'react'

import { UserProfileType } from '../interfaces'

type ListDetailProps = {
  item: UserProfileType
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.fullName}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail
