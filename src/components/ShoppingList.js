import Product from './Product'

function ShoppingList({ products, toggleFavorites, favorites }){

  function isFavorite(id){
    if (favorites.includes(id)) {
      return true;
    } else {
      return false
    }

    console.log('favs', favorites)
    console.log('fav include', favorites.includes(id))
    // return favorites.includes(id) ? true : false
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