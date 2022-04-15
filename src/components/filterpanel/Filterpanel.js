import React from 'react'
import './filterpanel.css'
import Rangefilter from './rangefilter/Rangefilter'
import Selectfilter from './selectfilter/Selectfilter'
import Togglefilter from './togglefilter/Togglefilter'

function Filterpanel({getType, getRating, getPrice}) {

  const setType = (type) => {
    getType(type)
  }

  const setRating = (rating) => {
    getRating(rating)
  }

  const setPrice = (price) => {
    getPrice(price)
  }
  
  return (
    <div className='filterpanel'>
        <Togglefilter getType={setType} />
        <Rangefilter setRating={setRating} /> 
        <Selectfilter setPrice={setPrice}/>
    </div>
  )
}

export default Filterpanel