// src/components/Cart.js
import React, { useState, useEffect } from 'react';
import './Cart.css';
function Cart() {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Save cart state to localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));
        // Calculate total price
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
    }, [cartItems]);

    const handleQuantityChange = (id, action) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: action === 'increase' ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
                      }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    const handleDragStart = (event, item) => {
        event.dataTransfer.setData('item', JSON.stringify(item));
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedItem = JSON.parse(event.dataTransfer.getData('item'));
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === droppedItem.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === droppedItem.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...droppedItem, quantity: 1 }];
        });
    };

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            <div className="cart-items" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <div className="quantity-controls">
                                <button onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                            </div>
                            <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty. Drag items here to add them!</p>
                )}
            </div>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={handleClearCart} className="clear-cart-btn">
                Clear Cart
            </button>
            <button className="checkout-btn">Checkout</button>
        </div>
    );
}

export default Cart;
function MenuItem({ item }) {
    return (
        <div
            className="menu-item"
            draggable
            onDragStart={(event) => event.dataTransfer.setData('item', JSON.stringify(item))}
        >
            <h3>{item.name}</h3>
            <p>Price: Rs.jjj{item.price.toFixed(2)}</p>
        </div>
    );
}

