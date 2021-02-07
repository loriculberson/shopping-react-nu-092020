import Product from './Product'

function ShoppingList({ products, addToFavorites, favorites }){

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
        addToFavorites={addToFavorites} 
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