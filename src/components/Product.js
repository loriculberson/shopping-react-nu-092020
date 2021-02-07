import { formatMoney } from '../helpers/format'
import '../Product.css'

function Product({ item, toggleFavorites, isFavorite }){
  const favorite = isFavorite ? <p className="favorite">Favorite!</p> : null
  const favButtonText = isFavorite ? "Remove from Favs" : "Add to Favs"

  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{formatMoney(item.cost)}</p>
      <button onClick={() => toggleFavorites(item.id)}>{favButtonText}</button>
      {favorite}
    </div>
  )
}

export default Product;