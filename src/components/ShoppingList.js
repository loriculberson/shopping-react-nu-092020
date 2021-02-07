import Product from './Product'
import React, { useState } from 'react'

function ShoppingList({ products }){
  const [favorites, setFavorites] = useState([])

  function toggleFavorites(id) {
   if (!favorites.includes(id)) {
     setFavorites([...favorites, id])
   } else {
     const updatedFaves = favorites.filter(fav => fav !== id)
     setFavorites(updatedFaves)
   }
  }

  function isFavorite(id){
    if (favorites.includes(id)) {
      return true;
    } else {
      return false
    }

    // console.log('favs', favorites)
    // console.log('fav include', favorites.includes(id))
    // useEffect(() => console.log(favorites));
  }

  const list = products.map(product => {
    return (
      <Product 
        item={product} 
        toggleFavorites={toggleFavorites} 
        isFavorite={isFavorite(product.id)}
      /> 
    )
  })
  
  return (
    <>
      {list}
    </>
  )
}

export default ShoppingList;