import { Link, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import ProductList from "./pages/ProductList.jsx"
import Product from "./pages/Product.jsx"

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      <div>Shopping Cart Item Count: {count}</div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />}/>
      <Route path="/products" element={<ProductList />}/>
      <Route path="/products/:id" element={<Product />}/>
    </Routes>
    </>
  )
}

export default App
