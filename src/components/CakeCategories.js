// src/components/CakeCategories.js
import React, { useState } from 'react';
import './CakeCategories.css';

function FoodMenu() {
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [dietaryFilters, setDietaryFilters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const menuItems = [
        { id: 1, name: 'Bruschetta', category: 'Starters', description: 'Grilled bread with tomato topping.', price: 'Rs.99', dietary: ['vegetarian'] },
        { id: 2, name: 'Caesar Salad', category: 'Starters', description: 'Classic Caesar with croutons.', price: 'Rs 7.99', dietary: ['gluten-free'] },
        { id: 3, name: 'Margherita Pizza', category: 'Main Course', description: 'Classic pizza with fresh basil.', price: 'Rs12.99', dietary: ['vegetarian'] },
        { id: 4, name: 'Grilled Chicken', category: 'Main Course', description: 'Served with roasted vegetables.', price: '$15.99', dietary: [] },
        { id: 5, name: 'Chocolate Cake', category: 'Desserts', description: 'Rich and moist chocolate delight.', price: '$6.99', dietary: ['gluten-free'] },
        { id: 6, name: 'Ice Cream Sundae', category: 'Desserts', description: 'Vanilla ice cream with toppings.', price: '$4.99', dietary: ['vegetarian'] },
        { id: 7, name: 'Spring Rolls', category: 'Starters', description: 'Crispy rolls with fresh vegetables.', price: '$6.49', dietary: [] },
        { id: 8, name: 'Spaghetti Carbonara', category: 'Main Course', description: 'Creamy pasta with bacon.', price: '$13.49', dietary: [] },
        { id: 9, name: 'Lava Cake', category: 'Desserts', description: 'Molten chocolate cake.', price: '$8.49', dietary: [] },
    ];

    const categories = ['All', 'Starters', 'Main Course', 'Desserts'];
    const dietaryOptions = ['vegetarian', 'gluten-free'];

    const handleCategoryChange = (category) => setCategoryFilter(category);

    const handleDietaryChange = (option) => {
        setDietaryFilters((prev) =>
            prev.includes(option)
                ? prev.filter((filter) => filter !== option)
                : [...prev, option]
        );
    };

    const filteredItems = menuItems.filter((item) => {
        const matchesCategory =
            categoryFilter === 'All' || item.category === categoryFilter;
        const matchesDietary =
            dietaryFilters.length === 0 ||
            dietaryFilters.every((filter) => item.dietary.includes(filter));
        return matchesCategory && matchesDietary;
    });

    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div className="food-menu">
            <h1>Our Menu</h1>

            {/* Filter Section */}
            <div className="filters">
                {/* Category Filter */}
                <div className="category-filter">
                    <h3>Categories</h3>
                    <ul>
                        {categories.map((category) => (
                            <li
                                key={category}
                                className={categoryFilter === category ? 'active' : ''}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Dietary Filters */}
                <div className="dietary-filter">
                    <h3>Dietary Needs</h3>
                    {dietaryOptions.map((option) => (
                        <label key={option}>
                            <input
                                type="checkbox"
                                checked={dietaryFilters.includes(option)}
                                onChange={() => handleDietaryChange(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>

            {/* Menu Items */}
            <div className="menu-grid">
                {paginatedItems.map((item) => (
                    <div className="menu-item" key={item.id}>
                        <img
                            src={`https://via.placeholder.com/150?text=${item.name}`}
                            alt={item.name}
                        />
                        <div className="item-info">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p className="price">{item.price}</p>
                        </div>
                        <div className="hover-actions">
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={currentPage === index + 1 ? 'active' : ''}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FoodMenu;
