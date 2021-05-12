import React from 'react'
import Link from 'next/link'
import { UserProfileType } from '../interfaces'

type PropsType = {
  data: UserProfileType
}

const ListItem = ({ data }: PropsType) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.fullName}
    </a>
  </Link>
)

export default ListItem
