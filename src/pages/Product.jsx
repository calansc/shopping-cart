import { useParams } from "react-router-dom"
import { useState } from "react"
import cart from "../assets/cart-outline.svg"
import "./product.css"

function Product({ addToCartClick, onChangeCount, addCount, addCountDecrement, addCountIncrement}) {
    const { id } = useParams();
    
    return (
        <div className="productPage">
            <h1 className="productPageHeading"> Product {id}</h1>
            <div className="product">
            <img className={id} src={cart} alt="Cart" height="50"/>
            <br/>
            <div className="productPageButtons">
                <button onClick={addCountDecrement}>Minus</button>
                <input type="number" id={id} value={addCount} onChange={onChangeCount}></input>
                <button onClick={addCountIncrement}>Plus</button>
            </div>
            <button onClick={addToCartClick}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product