'use client'
import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'
const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className='hero'>
            <div className='flex-1 w-full h-screen relative'>
                <Image alt='Image' src={'https://cdn.pixabay.com/photo/2019/03/31/14/31/houses-4093227_1280.jpg'} width={1000} height={500} className='w-full  absolute' />
                {/* <div className='hero__image-container'>
                    <div className="hero__image">
                        <Image src="https://cdn.pixabay.com/photo/2019/03/31/14/31/houses-4093227_1280.jpg" alt="hero" fill className='object-contain' />
                    </div>
                    <div className='hero__image-overlay' />

                </div>
                <h1 className='hero__title'>Find, Book and Rent a Car --- Quickly & Easily</h1>
                <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process....</p>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                /> */}
            </div>


        </div>

    )

}

export default Hero