"use client"

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className = 'hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                From Zero to Adventure in Seconds &mdash; Your Ideal Car Awaits!
            </h1>

            <p className='hero__subtitle'>
                Your Gateway to Hassle-Free Travel, Experience an efforltess car rental process
            </p>

            <CustomButton
              title = 'Explore Cars'
              containerStyles = 'bg-primary-blue text-white rounded-full w-40 mt-10 p-3'
              handleClick = {handleScroll}
            />
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>

            <div className='hero__image-overlay' />
          
  
        </div>
    </div>
  )
}

export default Hero