'use client'
import { createContext, useEffect, useState } from "react";
import { Checkout, GetAllBookings } from './checout.service'

export const CheckoutContext = createContext();

export const CheckoutContextProvider = ({ children }) => {
    const [booking, setBooking] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErrot] = useState();

    const getAllBookings = () => {
        setIsLoading(true);
        GetAllBookings().then(res => {
            setBooking(res.data.data)
            setIsLoading(false);
        }).catch(err => {
            setErrot(err);
            setIsLoading(false)
        })
    }

    useEffect(() => { getAllBookings(); }, [])

    const checkout = (data: object) => {
        setIsLoading(true);
        Checkout(data).then(res => {
            setBooking(res.data.data)
            setIsLoading(false);
        }).catch(err => {
            setErrot(err);
            setIsLoading(false)
        })
    }

    return (
        <CheckoutContext.Provider value={{ booking, isLoading, error, checkout }}>{children}</CheckoutContext.Provider>
    )
}