import React, { useState } from 'react'
import './togglefilter.css'

function Togglefilter({getType}) {
  const [all, setAll] = useState(true);
  const [veg, setVeg] = useState();
  const [nonVeg, setNonVeg] = useState();

  const allClicked = () => {
    setAll(true)
    setVeg(false)
    setNonVeg(false)
    getType("all");

  }
  const vegClicked = () => {
    setAll(false)
    setVeg(true)
    setNonVeg(false)
    getType("veg");
  }
  const nonVegClicked = () => {
    setAll(false)
    setVeg(false)
    setNonVeg(true)
    getType("nonveg");
  }
  return (
    <>
    <p className='catehead'>Category</p>
    <div className='togglefilter'>
        <span className={all ? 'active' : ''} onClick={allClicked}>🥗 All</span>
        <span className={veg ? 'active' : ''} onClick={vegClicked}>🥬 Veg</span>
        <span className={nonVeg ? 'active' : ''} onClick={nonVegClicked}>🍗 Non-veg</span>
    </div>
    </>
  )
}

export default Togglefilter