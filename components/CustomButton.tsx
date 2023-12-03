'use client'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton= ({title,containerStyles,handleClick,btnType,textStyles,rightIcon,isDisabled}: CustomButtonProps) => {
  return (
    <button
      disabled ={false}
      type ={btnType || "button"}
      className={`custom_btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton