'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { ChildrenInterface } from '@/types'

const AuthContext = ({ children }: ChildrenInterface) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthContext
