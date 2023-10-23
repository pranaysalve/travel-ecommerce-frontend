import React from 'react'
import Link from "next/link"
import Image from "next/image"

import { CustomButton } from '.'

const Navbar = () => {
    return (
        <header className='w-full absolute z-10 bg-gray-100 bg-opacity-60'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <div>
                    <Link href={"/"} className='flex justify-center items-center'>
                        <h1 className='text-primary-blue text-2xl font-bold'>Traveler Stop</h1>
                    </Link>
                </div>
                <div className='flex'>
                    <CustomButton
                        title='Cart'
                        btnType='button'
                        containerStyles=' font-bold text-white rounded-full bg-primary-blue min-w-[130px]'
                    />
                    <CustomButton
                        title='Sign In'
                        btnType='button'
                        containerStyles=' font-bold text-primary-blue rounded-full bg-white min-w-[130px]'
                    />
                </div>

            </nav>

        </header>
    )
}

export default Navbar