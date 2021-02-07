import '../App.css';
import ShoppingList from './ShoppingList'
import { productData } from '../data/productData'
import React, { useState, useEffect } from 'react'

function App() {
  const [favorites, setFavorites] = useState([])

  function toggleFavorites(id) {
   if (!favorites.includes(id)) {
     setFavorites([...favorites, id])
   } else {
     const updatedFaves = favorites.filter(fav => fav !== id)
     setFavorites(updatedFaves)
   }
  }

  useEffect(() => console.log(favorites));
  return (
    <div className="container">
      <ShoppingList 
        products={productData} 
        toggleFavorites={toggleFavorites} 
        favorites={favorites}
      />
    </div>
  );
}

export default App;
