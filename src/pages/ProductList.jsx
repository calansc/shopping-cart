import { Link } from "react-router-dom"
import cart from "../assets/cart-outline.svg"
import "./productList.css"

export default function ProductList({ onClickRed, onClickBlue, onClickGreen }) {
    return (
        <div className="productPage">
            <h1 className="productPageHeading">Product List</h1>
            <ul className="productPageList">
                <li>
                    <Link to="/products/red"> 
                        <img className="red" src={cart} alt="Cart" height="50"/>
                        <p>Product Red</p>
                    </Link>
                    <button onClick={onClickRed}>
                        Quick Add to Cart
                    </button>
                   
                </li>
                <li>
                    <Link to="/products/blue"> 
                        <img className="blue" src={cart} alt="Cart" height="50"/>
                        <p>Product Blue</p>
                    </Link>
                    <button onClick={onClickBlue}>
                        Quick Add to Cart
                    </button>
                   
                </li>                <li>
                    <Link to="/products/green"> 
                        <img className="green" src={cart} alt="Cart" height="50"/>
                        <p>Product Green</p>
                    </Link>
                    <button onClick={onClickGreen}>
                        Quick Add to Cart
                    </button>
                </li>
                <li>
                    <Link to="/products/green"> 
                        <img className="green" src={cart} alt="Cart" height="50"/>
                        <p>Product 4</p>
                    </Link>
                    <button onClick={onClickGreen}>
                        Quick Add to Cart
                    </button>
                </li>
                <li>
                    <Link to="/products/green"> 
                        <img className="green" src={cart} alt="Cart" height="50"/>
                        <p>Product 5</p>
                    </Link>
                    <button onClick={onClickGreen}>
                        Quick Add to Cart
                    </button>
                </li>
                <li>
                    <Link to="/products/green"> 
                        <img className="green" src={cart} alt="Cart" height="50"/>
                        <p>Product 6</p>
                    </Link>
                    <button onClick={onClickGreen}>
                        Quick Add to Cart
                    </button>
                </li>
            </ul>
            
            
        </div>
    )
}