'use client'

import Image from "next/image"
import { SearchManufacturer } from "."
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState('');
  const [model,setModel] = useState('');
  const HandleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(model === '' && manufacturer===''){
      return alert('Please fill in the search bar');
    }

    updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase());
  }

  const updateSearchParams = (model:string, manufacturer:string) => {
    const params = new URLSearchParams(window.location.search);

    if(model){
      params.set('model',model);
    }
    else {
      params.delete('model');
    }

    if(manufacturer){
      params.set('manufacturer',manufacturer);
    }
    else {
      params.delete('manufacturer');
    }

    const pathName = `${window.location.pathname}?${params.toString()}`

    router.push(pathName);
  }

  return (
    <form className='searchbar' onSubmit={HandleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer = {manufacturer}
          setManufacturer = {setManufacturer} />
        <SearchButton className="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image src='/model-icon.png' width={25} height={25} alt="A car representation" className="absolute w-[20px] h-[20px] ml-4"/>
        <input type="text" name="model" value={model} placeholder="Tiguan" onChange={(e)=> setModel(e.target.value)} className="searchbar__input"/>
        <SearchButton className='sm:hidden' />
      </div>
      <SearchButton className="max-sm:hidden" />
    </form>
  )
}

const SearchButton = ({className}: {className?:string}) => (
  <button type="submit" className={`ml-3 z-10 ${className}`}>
    <Image src='/magnifying-glass.svg' alt='submit button' width={40} height={40} className="object-contain"/>
  </button>
);

export default SearchBar