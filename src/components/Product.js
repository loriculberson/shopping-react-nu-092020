import { formatMoney } from '../helpers/format'
import '../Product.css'

function Product({ item, addToFavorites, isFavorite }){
  console.log('isFav', isFavorite)
  const favorite = isFavorite ? <p className="favorite">Favorite!</p> : null
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{formatMoney(item.cost)}</p>
      <button onClick={() => addToFavorites(item.id)}>Add to Favorites</button>
      {favorite}
    </div>
  )
}

export default Product;