import Modal from '@/app/components/Modal'
import { ImageModalProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const ImageModal = ({ src, isOpen, onClose }: ImageModalProps) => {
  if (!src) {
    return null
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='w-80 h-80'>
        <Image alt='Image' className='object-contain bg-black' fill src={src} />
      </div>
    </Modal>
  )
}

export default ImageModal
