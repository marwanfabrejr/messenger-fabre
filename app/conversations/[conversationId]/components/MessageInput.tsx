'use client'

import { MessageInputProps } from '@/types'
import React from 'react'

const MessageInput = ({
  placeholder,
  id,
  type,
  required,
  register,
  errors,
}: MessageInputProps) => {
  return (
    <div className='relative w-full'>
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className=' text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none'
      />
    </div>
  )
}

export default MessageInput
