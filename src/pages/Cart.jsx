import "./cart.css"
import { Link } from "react-router-dom"
import cart from "../assets/cart-outline.svg"

const Cart = ({ redCount, blueCount, greenCount, count, resetCounts}) => {
    const submitOrder = () => {
        if (count > 0) {
            alert("Submitted order of " + count + " items.")
            resetCounts();
        } else {
            alert("Please add an item to the cart");
        }
        
    }

    return (
        <div className="cartPage">
            <h1 className="cartPageHeading">Shopping Cart</h1>
            <ul className="cartPageList">
                <li>
                    <Link to="/products/red"> 
                        <img className="red" src={cart} alt="Cart" height="50"/>
                        <p>Product Red</p>
                    </Link> 
                    <div className="cartCount">
                    <div>Red carts: {redCount}</div>  
                    <button>Minus</button>
                    <button>Plus</button>
                    </div>       
                </li>
                <li>
                    <Link to="/products/blue"> 
                        <img className="blue" src={cart} alt="Cart" height="50"/>
                        <p>Product Blue</p>
                    </Link>
                    <div className="cartCount">
                    <div>Blue carts: {blueCount}</div>
                    <button>Minus</button>
                    <button>Plus</button>
                    </div>   
                </li>                
                <li>
                    <Link to="/products/green"> 
                        <img className="green" src={cart} alt="Cart" height="50"/>
                        <p>Product Green</p>
                    </Link>
                    <div className="cartCount">
                    <div>Green carts: {greenCount}</div>
                    <button>Minus</button>
                    <button>Plus</button>
                    </div>  
                    
                </li>
            </ul>
            <div className="cartSubmit">
                <br/>
                <div>Total Items in Cart: {count}</div>
                <button onClick={submitOrder} className="cartSubmitButton">Submit Order</button>
            </div>
        </div>
    )
}

export default Cart