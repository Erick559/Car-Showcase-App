'use client'

import Image from "next/image"
import { SearchManufacturer } from "."
import { useState } from "react"
import { useRouter } from "next/navigation"
import { SearchBarProps } from "@/types"

const SearchBar = ({setManufacturer,setModel}: SearchBarProps) => {
  const router = useRouter();
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel,setSearchModel] = useState('');
  const HandleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(searchModel === '' && searchManufacturer===''){
      return alert('Please fill in the search bar');
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  }

  return (
    <form className='searchbar' onSubmit={HandleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected = {searchManufacturer}
          setSelected = {setSearchManufacturer}
        />
        <SearchButton className="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image src='/model-icon.png' width={25} height={25} alt="A car representation" className="absolute w-[20px] h-[20px] ml-4"/>
        <input type="text" name="model" value={searchModel} placeholder="Tiguan" onChange={(e)=> setSearchModel(e.target.value)} className="searchbar__input"/>
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