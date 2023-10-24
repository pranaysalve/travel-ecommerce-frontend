'use client'
import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { CustomButton } from '.'

const Navbar = () => {
    const router = useRouter()
    return (
        <header className='w-full absolute z-10 bg-gray-100 bg-opacity-60'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <div>
                    <Link href={"/"} className='flex justify-center items-center'>
                        <h1 className='text-primary-blue text-2xl font-bold'>Traveler Stop</h1>
                    </Link>
                </div>
                <div className='flex gap-3'>
                    <CustomButton
                        title='Cart'
                        btnType='button'
                        containerStyles=' font-bold text-white rounded-full bg-primary-blue min-w-[130px]'
                        iconType='icon'
                        rightIcon={<AiOutlineShoppingCart size={20} />}
                        handleClick={() => router.push('/cart')}
                    />
                    <CustomButton
                        title='Sign In'
                        btnType='button'
                        containerStyles=' font-bold text-primary-blue rounded-full bg-white min-w-[130px]'
                        iconType='icon'
                        rightIcon={<AiOutlineUser size={20} />}
                    />
                </div>

            </nav>

        </header>
    )
}

export default Navbar