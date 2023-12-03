'use client'

import { SearchManufacturer } from "."
import { useState } from "react"

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const HandleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={HandleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer = {manufacturer}
          setManufacturer = {setManufacturer} />
      </div>

    </form>
  )
}

export default SearchBar