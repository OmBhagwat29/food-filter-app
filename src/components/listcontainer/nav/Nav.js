import React, { useState } from 'react'
import './nav.css'

function Nav({getMeal}) {
  const [breakfast, setBreakfast] = useState(true);
  const [lunch, setLunch] = useState();
  const [dinner, setDinner] = useState();

  const breakfastClicked = () => {
    setBreakfast(true);
    setLunch(false);
    setDinner(false);
    getMeal("breakfast")
  }

  const lunchClicked = () => {
    setBreakfast(false);
    setLunch(true);
    setDinner(false);
    getMeal("lunch")

  }

  const dinnerClicked = () =>{
    setBreakfast(false);
    setLunch(false);
    setDinner(true);
    getMeal("dinner")

  }
  return (
  <>
    <div className='nav'>
      <span className={breakfast ? 'active' : ''} onClick={breakfastClicked}>Bearkfast</span>
      <span className={lunch ? 'active' : ''} onClick={lunchClicked}>Lunch</span>
      <span className={dinner ? 'active' : ''} onClick={dinnerClicked}>Dinner</span>
    </div>
    <hr />
  </>
  )
}

export default Nav