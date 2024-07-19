'use client'

import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import ShowMore from '@/components/ShowMore'
import { fuels, manufacturers, yearsOfProduction } from '@/constants'
import { HomeProps } from '@/types'
import { fetchCars } from '@/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home({searchParams}: HomeProps) {
  const [allCars, setAllCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  //pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async() => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(results);
    } catch (error) {
      console.log(error);
      setError(`${error}: Something went Wrong`)
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(()=> {
    getCars()
  },[manufacturer,model,fuel,year,limit]);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore our catalogue of cars</p>
        </div>

        <div className='home__filters'>
          <SearchBar setManufacturer = {setManufacturer} setModel={setModel} />

          <div className='home__filter-container'>
            <CustomFilter setFilter = {setFuel} title='fuel' options={fuels}/>
            <CustomFilter setFilter = {setYear} title='year' options={yearsOfProduction} />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car,index)=> (
                <CarCard key={index} car={car} />
              ))}
            </div>
            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image src='/loader.svg' width={50} height={50} alt='loading' className='object-contain'/>
              </div>
            )}
            <ShowMore pageNumber={limit/10} isNext={limit  > allCars.length} setLimit={setLimit}/>
          </section>
        ):(
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, No results</h2>
            <p>{error}</p>
          </div>
        )}
      </div>
    </main>
  )
}
