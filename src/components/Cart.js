// src/components/Cart.js
import React from 'react';

function Cart() {
    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            <p>Item 1 - Quantity: 1 - Price: $20</p>
            <p>Total: $20</p>
            <button>Checkout</button>
        </div>
    );
}

export default Cart;
