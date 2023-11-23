import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href='/' className='flex justify-center items-center'>
          <Image 
            src = '/Logo.png' 
            alt='GoCar Logo'
            width={120}
            height={20}
            className='object-contain' 
          />
        </Link>
        <CustomButton 
        title='Sign in'
        btnType = 'button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] min-h-[40px] font-bold'

        />
      </nav>
    </header>
  )
}

export default Navbar