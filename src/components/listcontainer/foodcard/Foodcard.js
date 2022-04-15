import React from 'react'
import './foodcard.css'

function Foodcard({setName, setPrice, setRating, setImage}) {
  let rating="";
  for(let i=1; i<=setRating; i++){ 
    rating = rating+"⭐";
  }
  return (
    <div className='foodcard'>
       <img src={setImage} alt="" />
       <p className="name">{setName}</p>
       <div className="flex">
       <p className="price">&#8377;{setPrice}</p>
       <p className="rating">{rating}</p>
       </div>
    </div>
  )
}

export default Foodcard