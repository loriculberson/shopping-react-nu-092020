import Product from './Product'
import React, { useState, useEffect } from 'react'

function ShoppingList({ products }){
  const [favorites, setFavorites] = useState([])

  function toggleFavorites(id) {
    //if the id is in not in the favorites array, add it
   if (!favorites.includes(id)) {
     setFavorites([...favorites, id])
   } else {
     // if the id is in the favorites array, 
     //keep all the ids that are NOT the id you selected
     const updatedFaves = favorites.filter(fav => fav !== id)
     setFavorites(updatedFaves)
   }
  }

  useEffect(() => console.log('fav', favorites))
//is the id of the treat in the favorites array?
  function isFavorite(id){
    return favorites.includes(id) ? true : false
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