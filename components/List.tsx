import * as React from 'react'
import ListItem from './ListItem'
import { Nullable, UserProfileType } from '../interfaces'

type PropsType = {
  items: Nullable<UserProfileType[]>
}

const List = ({ items }: PropsType) => (
  <ul>
    {items?.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
