'use client'
import { useState } from 'react';
import { CartContext } from '@/service/cart/cart.context'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react'
import { CheckoutContext } from '@/service/checkout/checkout.context';

const Cart = () => {
    const router = useRouter()
    const { cartItems, isLoading, error, getAllCartItems, coupon, addRemoveCoupon, removeCartItem } = useContext(CartContext)
    const { checkout } = useContext(CheckoutContext)
    const [addCoupon, setAddCoupon] = useState('');
    const [type, setType] = useState('');

    // const addToCart = (data: object) => {
    //     addCartItem(data);
    // }

    const CouponHandler = (e: any, couponString: string, couponType: string) => {
        e.preventDefault()
        if (couponType === 'add') {
            addRemoveCoupon(addCoupon, couponType);
            getAllCartItems();
        }
        if (couponType === 'remove') {
            addRemoveCoupon(addCoupon, couponType);
            getAllCartItems();
        }
    }
    useEffect(() => {
        getAllCartItems();
    }, [])

    return (
        <div>
            {!isLoading && cartItems && cartItems[0] && <div className=" bg-gray-100 pt-20 mb-36">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {
                            cartItems[0]?.tours.map((tour, index) => {
                                index += 1
                                return (< div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={index} >
                                    <Image src={`/assets/${index}.png`} alt="product-image" width={200} height={200} className="w-full rounded-lg sm:w-40" />
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className="mt-5 sm:mt-0">
                                            <h2 className="text-lg font-bold text-gray-900">{tour?.tour?.name}</h2>
                                            <p className="mt-1 text-xs text-gray-700">{tour?.tour?.summary}</p>
                                        </div>
                                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="flex flex-end items-center space-x-4">
                                                <p className="text-lg">$. {tour?.price}</p>
                                                <svg onClick={() => removeCartItem(tour)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                            )
                        }
                    </div>

                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">${cartItems[0]?.cartTotal}</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between gap-2">
                            <p className="text-gray-700">Apply Coupon</p>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded" placeholder="Coupon" onChange={(e) => setAddCoupon(e.target.value)} />
                            {addCoupon && <button onClick={(e) => CouponHandler(e, addCoupon, 'add')} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Apply</button>}
                        </div>
                        <hr className="my-4" />
                        {cartItems[0]?.coupon &&
                            <div className="flex justify-between gap-2">
                                <p className="text-gray-700">Coupon: {cartItems[0]?.coupon?.name} {" "} {cartItems[0]?.coupon?.discount}% off</p>
                                <p className="text-gray-700"></p>
                            </div>
                        }
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">$ {cartItems[0]?.totalAfterDiscount}</p>
                                <p className="text-sm text-gray-700">including Taxes</p>
                            </div>
                        </div>
                        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={() => checkout(cartItems)}>Check out</button>
                    </div>
                </div>
            </div>}
            {!isLoading &&
                <>
                    {cartItems && !cartItems[0] && <div className="mx-auto justify-center px-6 h-screen items-center align-middle md:space-x-6 xl:px-0">
                        <h1 className="mb-10 text-center text-2xl align-middle font-bold">Empty Cart</h1>
                    </div>}
                </>
            }
        </div >
    )
}

export default Cart