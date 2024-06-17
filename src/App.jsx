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
  const redDecrement = () => {
    setRedCount(redCount - 1)
    setCount(count -1 )
  }
  const blueIncrement = () => {
    setBlueCount(blueCount + 1)
    setCount(count + 1)
  }
  const blueDecrement = () => {
    setBlueCount(blueCount - 1)
    setCount(count -1 )
  }
  const greenIncrement = () => {
    setGreenCount(greenCount + 1)
    setCount(count + 1)
  }
  const greenDecrement = () => {
    setgreenCount(greenCount - 1)
    setCount(count -1 )
  }
  const resetCounts = () => {
    setCount(0)
    setRedCount(0)
    setBlueCount(0)
    setGreenCount(0)
  }
  let {id} = useParams();
  const addToCartCounter = () => {
    // console.log(event.target.value);
    setAddCount(parseInt(event.target.value))
    // console.log(window.location.pathname)
  }
  const addCountIncrement = () => {
    setAddCount(addCount +1);
  }
  const addCountDecrement = () => {
    setAddCount(addCount -1);
  }

  const addToCart = () => {
    setCount(count+addCount);
    if (window.location.pathname === "/products/red") {
      // console.log('red')
      setRedCount(redCount+addCount)
      setAddCount(0);
      let input = document.getElementById("red");
      input.value=0;
    } else if (window.location.pathname === "/products/blue") {
      // console.log('blue')
      setBlueCount(blueCount+addCount)
      setAddCount(0);
      let input = document.getElementById("blue");
      input.value=0;
    } else if (window.location.pathname === "/products/green") {
      // console.log('green')
      setGreenCount(greenCount+addCount)
      setAddCount(0);
      let input = document.getElementById("green");
      input.value=0;
    } else { console.log('no color add?')}
  }

  
  return (
    <>
    <nav className="navBar">
      <ul className="navBarLinks">
        <li className="navBarHome"><Link to="/">Home</Link></li>
        <li className="navBarProducts"><Link to="/products">Products</Link></li>
        <li className="navBarCart"><Link to="/cart">Proceed to Checkout: {count}</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart 
          redCount={redCount} 
          redIncrement={redIncrement} 
          redDecrement={redDecrement}
          blueCount={blueCount} 
          blueDecrement={blueDecrement}
          blueIncrement={blueIncrement}
          greenCount={greenCount} 
          greenIncrement={greenIncrement}
          greenDecrement={greenDecrement}
          count={count} 
          resetCounts={resetCounts} 
        />}
      />
      <Route path="/products" element={<ProductList 
        onClickRed={redIncrement}
        onClickBlue={blueIncrement} 
        onClickGreen={greenIncrement}
        />}
      />
      <Route path="/products/:id" element={<Product 
        addToCartClick={addToCart} 
        onChangeCount={addToCartCounter}
        addCount={addCount}
        addCountDecrement={addCountDecrement}
        addCountIncrement={addCountIncrement}
        />}
      />
    </Routes>
    </>
  )
}

export default App
