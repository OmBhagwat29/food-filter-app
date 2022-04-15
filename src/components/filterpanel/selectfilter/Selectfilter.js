import React from 'react'
import './selectfilter.css'
function Selectfilter({setPrice}) {

  const sortPrice = (e) =>{
    setPrice(e.target.value)
  }
  return (
    <>
    <p className='catehead'>Price</p>
        <select className='selectfilter' onChange={sortPrice}>
            <option value="asc">Higest Price</option>
            <option value="dec">Lowest Price</option>
          </select>
    </>
  )
}

export default Selectfilter