import React, { useState, useEffect } from 'react';
import './App.css';
import Filterpanel from './components/filterpanel/Filterpanel';
import Listcontainer from './components/listcontainer/Listcontainer';
import SearchBar from './components/searchbar/Searchbar';
import Dishes from './datafile/Dishes';

function App() {

  const [dish, setDish] = useState(Dishes);
  const [searchItem, setSearchItem] = useState();
  const [mealItem, setMealItem] = useState('breakfast');
  const [type, setType] = useState();
  const [rating, setRating] = useState();
  const [empty, setEmpty] = useState(false);
  const [price, setPrice] = useState();
  

  const setSearch = (searchValue) => {
    setSearchItem(searchValue)
  }

  const getMeal = (mealValue) => {
    setMealItem(mealValue)
  }

  const getType = (typeValue) => {
    setType(typeValue)
  }

  const getRating = (ratingValue) => {
    setRating(ratingValue)
  }

  const getPrice = (priceValue) => {
    setPrice(priceValue)
    console.log(priceValue)
  }


  let filteredDishes;

  useEffect(() => {

    filteredDishes = Dishes;

    if(searchItem){
      filteredDishes = filteredDishes.filter((dish) => dish.name.toLowerCase().includes(searchItem.toLowerCase()))
    }

    if(mealItem){
      filteredDishes = filteredDishes.filter((dish) => dish.mealType==mealItem)
    }

    if(price){
      if(price=='asc'){
        filteredDishes = filteredDishes.sort((a, b) => {
          return b.price-a.price
        })
      }else{
        filteredDishes = filteredDishes.sort((a, b) => {
          return a.price-b.price
        })
      }
    }

    if(type){
      if(type=="all"){
        filteredDishes = filteredDishes
      }else{
        filteredDishes = filteredDishes.filter((dish) => dish.type==type)
        
      }
      
    }

    if(rating){
      filteredDishes = filteredDishes.filter((dish) => dish.rating>=rating)
    }

  setDish(filteredDishes)

  if(filteredDishes.length==0){
    setEmpty(true)
  }else{
    setEmpty(false)
  }
  
   
  }, [searchItem, mealItem, type, rating, price])
  

  return (
    <div className="App">
      <SearchBar getSearch={setSearch}/>
      <div className='wrap_container'>
          <Filterpanel getType={getType} getRating={getRating} getPrice={getPrice}/>
          <Listcontainer getDish={dish} getMeal={getMeal} isEmpty={empty}/>
      </div>
 
    </div>
  );
}

export default App;
