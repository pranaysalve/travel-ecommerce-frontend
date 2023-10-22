'use client'
import { useContext, useEffect } from 'react';
import { CustomFilter, Hero, SearchBar, TourCard } from '@/components'
import { yearsOfProduction, fuels } from '@/constants';
import { HomeProps, ITourProps } from '@/types';

import { TourContext } from '@/service/tour/tour.context';

interface IPropTypes {
  tours: ITourProps[];
  isLoading: boolean;
  error: any;
  getAllTours: () => void
}

const Home = () => {
  const { tours, isLoading, error, getAllTours }: IPropTypes = useContext(TourContext)
  console.log("home", { tours })
  useEffect(() => {
    getAllTours();
  }, [])

  const isDataEmpty = !Array.isArray(tours) || tours.length < 1 || !tours;
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='flex-center home__text-container items-center justify-center'>
          <h1 className="text-4xl font-extrabold lowercase">Explore your destinations!</h1>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>
        {!isLoading ? (
          <section>
            <div className='home__cars-wrapper'>
              {tours?.map((item, index) => {
                index = index + 1
                return (<TourCard index={index} tour={item} />)
              }
              )}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Loading Data</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  )
}





export default Home;