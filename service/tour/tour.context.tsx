'use client'
import { createContext, useEffect, useState } from 'react'
import { GetAllTours, GetSingleTour } from './tour.service';

export const TourContext = createContext();


export const TourContextProvider = ({ children }: any) => {
    const [tours, setTours] = useState();
    const [tour, setTour] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getAllTours = () => {
        setIsLoading(true)
        GetAllTours().then(res => {
            setTours(res.data.data.data)
            setIsLoading(false)
        }).catch(err => {
            setError(err)
            setIsLoading(false)
        })
    }

    const getSingleTour = (id: string) => {
        setIsLoading(true)
        GetSingleTour(id).then(res => {
            setTour(res.data.data.data)
            setIsLoading(false)
        }).catch(err => {
            setError(err)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getAllTours();
        console.log({ tours })
    }
        , [])

    return (
        <TourContext.Provider value={{ tour, tours, error, isLoading, getAllTours, getSingleTour }}>{children}</TourContext.Provider>
    )
}


