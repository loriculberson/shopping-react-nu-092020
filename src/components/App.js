import '../App.css';
import ShoppingList from './ShoppingList'
import { productData } from '../data/productData'

function App() {
  return (
    <>
    <h1>Chicago's Tasty Treats</h1>
    <h4>Lori was watching the Great British Baking Show when she created this lab</h4>
      
    <div className="container">
      <ShoppingList 
        products={productData} 
      />
    </div>
    </>
  );
}

export default App;
