import '../App.css';
import ShoppingList from './ShoppingList'
import { productData } from '../data/productData'
import React, { useState, useEffect } from 'react'

function App() {
  const [favorites, setFavorites] = useState([])

  function addToFavorites(id) {
   if (!favorites.includes(id)) {
     setFavorites([...favorites, id])
   }
  }

  useEffect(() => console.log(favorites));
  return (
    <div className="container">
      <ShoppingList 
        products={productData} 
        addToFavorites={addToFavorites} 
        favorites={favorites}
      />
    </div>
  );
}

export default App;
