import { formatMoney } from '../helpers/format'
import '../Product.css'

function Product({ item, toggleFavorites, isFavorite }){
  //if isFavorite is true, display "Favorite on the card", else display nothing
  const favorite = isFavorite ? <p className="favorite">Favorite!</p> : null
  //if isFavorite is true, button text is "Remove", otherwise, "Add"
  const favButtonText = isFavorite ? "Remove from Favs" : "Add to Favs"

  return (
    <div className="card">
      <img className="product-img" src={item.img} />
      <h3>{item.name}</h3>
      <p>${formatMoney(item.cost)}</p>
      <button onClick={() => toggleFavorites(item.id)}>{favButtonText}</button>
      {favorite}
    </div>
  )
}

export default Product;