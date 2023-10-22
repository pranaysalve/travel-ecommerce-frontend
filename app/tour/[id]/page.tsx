'use client';
import { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import { ITourProps } from "@/types"
import { TourContext } from "@/service/tour/tour.context";
import Image from "next/image";
import { CartContext } from "@/service/cart/cart.context";
import { useRouter } from "next/navigation";
export const Tour = ({ params }) => {
    const { tour, getSingleTour, isLoading, error } = useContext(TourContext);

    const { addCartItem } = useContext(CartContext);

    const router = useRouter()


    const addToCart = (data: object) => {
        addCartItem(data);
        router.push('/cart');
    }
    useEffect(() => {
        getSingleTour(params.id)
    }, [params.id])

    const renderRatingStar = (rating: number) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
        }
        return stars;
    }

    console.log(tour)
    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            {!isLoading && <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <Image alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`/assets/1.png`} width={1000} height={1000} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{tour?.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                {tour?.ratingsAverage}{"  "}{renderRatingStar(tour?.ratingsAverage)}
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">{tour?.description}</p>
                        <div className="flex mt-4">
                            <span className="title-font font-medium text-2xl text-gray-900">$. {tour?.price} /-</span>
                            <button className="flex ml-auto text-white bg-primary-blue border-0 py-2 px-6 focus:outline-none rounded" onClick={() => addToCart(tour)}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    )
}


export default Tour