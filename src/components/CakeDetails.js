// src/components/CakeDetails.js
import React from 'react';
import './CakeCategories.css';

function CakeCategories() {
    const categories = ["Chocolate", "Fruit", "Custom"];

    return (
        <div className="categories">
            <h2>Cake Categories</h2>
            <div className="category-list">
                {categories.map((category) => (
                    <button key={category} className="category-button">
                        {category} Cakes
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CakeCategories;
