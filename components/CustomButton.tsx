'use client'
import Image from 'next/image'


function CustomButton() {
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