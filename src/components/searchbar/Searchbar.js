import React, { useState } from 'react'
import './searchbar.css'

function SearchBar({getSearch}) {
  const [search, setSearch] = useState();
  getSearch(search)
  return (
    <div className='search'>
        <i className="fa fa-search"></i>
        <input type="text" placeholder='Search Dish...' onChange={(e) => setSearch(e.target.value) }/>
    </div>
  )
}

export default SearchBar