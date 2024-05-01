import { Link } from "react-router-dom"
import cart from "../assets/cart-outline.svg"

export default function ProductList({ onClickRed, onClickBlue, onClickGreen }) {
    return (
        <>
            <h1>Product List</h1>
            <ul>
                <li>
                    <Link to="/products/red"> 
                        <img className="color-red" src={cart} alt="Cart" height="50"/>
                        <br/>
                        Product Red
                    </Link>
                    <br/>
                    <button onClick={onClickRed}>
                        Quick Add to Cart
                    </button>
                   
                </li>
                <li>
                    <Link to="/products/blue"> 
                        <img className="color-blue" src={cart} alt="Cart" height="50"/>
                        <br/>
                        Product Blue
                    </Link>
                    <br/>
                    <button onClick={onClickBlue}>
                        Quick Add to Cart
                    </button>
                   
                </li>                <li>
                    <Link to="/products/gren"> 
                        <img className="color-green" src={cart} alt="Cart" height="50"/>
                        <br/>
                        Product Green
                    </Link>
                    <br/>
                    <button onClick={onClickGreen}>
                        Quick Add to Cart
                    </button>
                   
                </li>
            </ul>
            
            
        </>
    )
}