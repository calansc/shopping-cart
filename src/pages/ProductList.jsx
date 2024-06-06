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
                        <img className="blue" src={cart} alt="Cart" height="50"/>
                        <br/>
                        Product Blue
                    </Link>
                    <br/>
                    <button onClick={onClickBlue}>
                        Quick Add to Cart
                    </button>
                   
                </li>                <li>
                    <Link to="/products/green"> 
                        <img className="green" src={cart} alt="Cart" height="50"/>
                        <br/>
                        Product Green
                    </Link>
                    <br/>
                    <button onClick={onClickGreen}>
                        Quick Add to Cart
                    </button>
                   
                </li>
            </ul>
            
            
        </div>
    )
}