import React, { useState, useEffect } from 'react'
import './rangefilter.css'

function Rangefilter({setRating}) {

   const [star, setStar] = useState(5);

    let starRating;
    const rangeHandler = (rangeValue) =>{
        setRating(rangeValue.target.value)
        setStar(rangeValue.target.value)
    
    }
    let stars = ''
    for(let i=1; i<=star; i++){
        stars = stars+'⭐'
    }
  return (
    <>
    <p className='catehead'>Rating:{stars}</p>
    <input type="range" min="1" max="5"  onChange={rangeHandler}  className="slider" id="myRange"></input>
    </>
  )
}

export default Rangefilter