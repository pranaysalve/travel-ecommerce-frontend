'use client'

import { createContext, useEffect, useState } from 'react';
import { GetCartItems, AddItemsToCart, AddRemoveCoupon, RemoveItemsFromCart } from './cart.service';
export const CartContext = createContext()

export const CartContextProvider = ({ children }: any) => {

    const [cartItems, setCartItems] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState()
    const [coupon, setCoupon] = useState();
    const getAllCartItems = () => {
        setIsLoading(true)
        GetCartItems()
            .then((res) => {
                setCartItems(res.data.data.data)
                setIsLoading(false)
            }).catch(err => {
                setError(err);
                setIsLoading(false)
            })
    }

    const addRemoveCoupon = (coupon: string, type: string) => {
        AddRemoveCoupon(coupon, type).then((res) => {
            setCoupon(res.data.data.coupon)
            setIsLoading(false)
        }).catch(err => {
            setError(err);
            setIsLoading(false)
        })
    }

    const addCartItem = (data: string) => {
        setIsLoading(true)
        AddItemsToCart(data)
            .then((res) => {
                setCartItems(res.data.data.data)
                setIsLoading(false)
            }).catch(err => {
                setError(err);
                setIsLoading(false)
            })

    }

    const removeCartItem = (data: object) => {
        setIsLoading(true)
        RemoveItemsFromCart(data)
            .then((res) => {
                setCartItems(res.data.data.data)
                setIsLoading(false)
            }).catch(err => {
                setError(err);
                setIsLoading(false)
            })
    }

    return (
        <CartContext.Provider value={{ cartItems, isLoading, error, coupon, getAllCartItems, addCartItem, addRemoveCoupon, removeCartItem }}>
            {children}
        </CartContext.Provider>
    )
}