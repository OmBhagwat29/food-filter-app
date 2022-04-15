import React from 'react'
import Emptycontainer from '../emptycontainer/Emptycontainer'
import Foodcard from './foodcard/Foodcard'
import './listcontainer.css'
import Nav from './nav/Nav'

function Listcontainer({getDish, getMeal, isEmpty}) {

  const setMeal = (meal) => {
    getMeal(meal)
    
  }
  return (
    <>
    <div className='listcontainer'>
   
    <Nav getMeal={setMeal}/>
    {isEmpty ? 
      <Emptycontainer />:
      getDish.map((dish) => {
        return(
          <Foodcard setImage={dish.img} setName={dish.name} setPrice={dish.price} setRating={dish.rating}/>
        )
      })
      }
    {
      
    }
    
    
    </div>
    </>
  )
}

export default Listcontainer