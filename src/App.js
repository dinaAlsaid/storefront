import './App.css';
import Category from "./components/category.js";
import Product from "./components/product.js";
import Header from './components/header.js';
import Cart from './components/cart.js'
function App() {
  return (
    <>
      <Header/>
      <Cart />
      <Category />
      <Product />
    </>
  );
}

export default App;
