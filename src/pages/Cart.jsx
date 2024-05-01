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
        <>
            <h1>Shopping Cart</h1>
            <div>
                <div>Red carts: {redCount}</div>
                <div>Blue carts: {blueCount}</div>
                <div>Green carts: {greenCount}</div>
                <br/>
                <div>Total Items in Cart: {count}</div>
            </div>
            <button onClick={submitOrder} >Submit Order</button>
        </>
    )
}

export default Cart