import { ChildrenInterface } from '@/types'
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import getUsers from '../actions/getUsers'
import UserList from './components/UserList'

const UsersLayout = async ({ children }: ChildrenInterface) => {
  const users = await getUsers()

  return (
    <Sidebar>
      <UserList items={users} />
      <div className='h-full'>{children}</div>
    </Sidebar>
  )
}

export default UsersLayout
