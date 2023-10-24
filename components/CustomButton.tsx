'use client'
import React from 'react'
import Image from "next/image"
import { CustomButtonProps } from '@/types'

const CustomButton = ({
    title,
    containerStyles,
    handleClick, btnType, textStyles, rightIcon,
    iconType, isDisabled,
    ...props
}: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles} items-center hover:bg-gray-300 hover:text-blue-500`}
            onClick={handleClick}

        >
            <span className={`flex-1 hover:text-blue-500 hover:font-semibold p-1 ${textStyles}`}>{title}</span>
            {rightIcon && iconType === 'image' ? (
                <div className='relative w-6 h-6'>
                    <Image src={rightIcon} alt={rightIcon} fill className='object-contain hover:text-primary-blue' />
                </div>
            ) : (
                <div className='relative w-6 h-6'>
                    {rightIcon}
                </div>
            )
            }
        </button>
    )
}

export default CustomButton