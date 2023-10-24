'use client'
import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ITourProps } from '@/types'
import { CartContext } from '@/service/cart/cart.context'
import { CustomButton, CardDetails } from '.'
import { calculateCarRent, generateCarImageUrl, addCart } from '@/utils'

interface TourCardProps {
    index: number;
    tour: ITourProps;
}
const TourCard = ({ index, tour }: TourCardProps,) => {
    const { push } = useRouter()
    const { cartItems, isLoading, error, getAllCartItems, addCartItem } = useContext(CartContext);

    const { id,
        name,
        duration,
        maxGroupSize,
        difficulty,
        ratingsAverage,
        ratingsQuantity,
        price,
        summary,
        description,
        imageCover,
        images,
        startDates,
    } = tour;

    console.log({ index })
    const [isOpen, setIsOpen] = useState(false)
    const [cartItem, setCartItem] = useState();
    let arry_Id: string[] = [];
    // const carRent = calculateCarRent(city_mpg, year);
    // console.log(tour)

    const renderRatingStar = (rating: number) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
        }
        return stars;
    }

    const addToCart = (data: object) => {
        addCartItem(data);
    }
    // useEffect(() => {
    //     getAllCartItems()
    // }, [])
    // console.log({ cartItem });

    // const viewTour = (tour: ITourProps) => {
    //     router.push(`/tour/${tour.id}`)
    // }



    console.log({ cartItems })


    return (
        <>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <Image width={1000} height={1000} className="rounded-t-lg" src={`/assets/${index}.png`} alt={imageCover} />
                <div className="p-5">
                    <div className="flex md:flex-row justify-between gap-4 relative ">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{name}</h5>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">$.{price}</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">{summary}</p>
                    <div>
                        <div>
                            Rating {ratingsAverage} {renderRatingStar(ratingsAverage)}
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-center mt-2 gap-4">
                        <button onClick={() => push(`/tour/${tour.id}`)} className="w-full inline-flex justify-center items-center px-3 py-2 text-md font-medium text-center text-white bg-primary-blue rounded-full ">
                            View Tour
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                        <button onClick={() => addToCart(tour)} className="w-full inline-flex  justify-center items-center px-3 py-2 text-md font-medium text-center text-white bg-primary-blue rounded-full ">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TourCard