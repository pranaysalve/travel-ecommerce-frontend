'use client'
import { useState } from 'react';
import { CartContext } from '@/service/cart/cart.context'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react'
import { CheckoutContext } from '@/service/checkout/checkout.context';

const Cart = () => {
    const router = useRouter()
    const { booking, isLoading, error } = useContext(CheckoutContext)

    const data = booking?.data;

    console.log(booking.data)


    return (

        <div>
            {!isLoading && data && <div className=" bg-gray-100 pt-20 mb-36">
                <h1 className="mb-10 text-center text-2xl font-bold">Bookings</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {
                            data.map((tour, index) => {
                                index += 1
                                return (< div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={index} >
                                    <Image src={`/assets/${index}.png`} alt="product-image" width={200} height={200} className="w-full rounded-lg sm:w-40" />
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className="mt-5 sm:mt-0">
                                            <h2 className="text-lg font-bold text-gray-900">{index}</h2>
                                            <p className="mt-1 text-xs text-gray-700"></p>
                                        </div>
                                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="flex flex-end items-center space-x-4">
                                                <p className="text-lg"> $. {tour?.totalAfterDiscount}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="flex flex-end items-center space-x-4">
                                                <p className="text-sm">Booking ID {tour._id}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                            )
                        }
                    </div>
                </div>
            </div>}
        </div >
    )
}

export default Cart