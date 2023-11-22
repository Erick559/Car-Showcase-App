'use client'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

function CustomButton({title,containerStyles,handleClick}: CustomButtonProps) {
  return (
    <button
      disabled ={false}
      type ={`button`}
      className={`custom_btn`}
      onClick={() => {}}
    >
      <span className={'flex-1'}>
        title
      </span>
    </button>
  )
}

export default CustomButton