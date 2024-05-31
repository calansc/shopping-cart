import { Link, Route, Routes, useParams } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import ProductList from "./pages/ProductList.jsx"
import Product from "./pages/Product.jsx"

const App = () => {
  const [count,setCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [blueCount, setBlueCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [addCount, setAddCount] = useState(0);
  const redIncrement = () => {
    setRedCount(redCount + 1)
    setCount(count + 1)
  }
  const blueIncrement = () => {
    setBlueCount(blueCount + 1)
    setCount(count + 1)
  }
  const greenIncrement = () => {
    setGreenCount(greenCount + 1)
    setCount(count + 1)
  }
  const resetCounts = () => {
    setCount(0)
    setRedCount(0)
    setBlueCount(0)
    setGreenCount(0)
  }
  let {id} = useParams();
  const addToCartCounter = () => {
    setAddCount(event.target.value)
    console.log({id})
  }
  const addToCart = () => {
    setCount(count+addCount);
  }
  
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
      <Route path="/cart" element={<Cart redCount={redCount} blueCount={blueCount} greenCount={greenCount} count={count} resetCounts={resetCounts}/>}/>
      <Route path="/products" element={<ProductList onClickRed={redIncrement} onClickBlue={blueIncrement} onClickGreen={greenIncrement}/>}/>
      <Route path="/products/:id" element={<Product addToCartClick={addToCart} onChangeCount={addToCartCounter}/>}/>
    </Routes>
    </>
  )
}

export default App
