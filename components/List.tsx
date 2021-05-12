import * as React from 'react'
import ListItem from './ListItem'
import { UserProfileType } from '../interfaces'

type PropsType = {
  items: UserProfileType[]
}

const List = ({ items }: PropsType) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
