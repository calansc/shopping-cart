import { Link } from "react-router-dom"
import cart from "../assets/cart-outline.svg"



export default function ProductList() {
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
                    Quick Add to Cart
                   
                </li>
                <li>
                    <Link to="/products/green">Product Green</Link>
                    <img className="color-green" src={cart} alt="Cart" height="50"/>
                </li>
                <li>
                    <Link to="/products/blue">Product Blue</Link>
                    <img className="color-blue" src={cart} alt="Cart" height="50"/>
                </li>
            </ul>
            
            
        </>
    )
}