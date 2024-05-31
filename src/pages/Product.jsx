import { useParams } from "react-router-dom"
import { useState } from "react"
import cart from "../assets/cart-outline.svg"

function Product({ addToCartClick, onChangeCount}) {
    const { id } = useParams();
    
    return (
        <>
            <h1> Product {id}</h1>
            <img className={id} src={cart} alt="Cart" height="50"/>
            <br/>
            <input type="number" onChange={onChangeCount}></input>
            <button onClick={addToCartClick}>Add To Cart</button>
        </>
    )
}

export default Product