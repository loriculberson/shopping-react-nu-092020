import '../App.css';
import ShoppingList from './ShoppingList'
import { productData } from '../data/productData'

function App() {
  return (
    <div className="container">
      <ShoppingList 
        products={productData} 
      />
    </div>
  );
}

export default App;
