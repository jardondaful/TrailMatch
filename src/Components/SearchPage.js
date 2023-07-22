import React from 'react';
import {Routes, Route, useNavigate } from "react-router-dom"
const SearchPage = () => {

    const navigate = useNavigate();
	const handleItemClick = () => {
		navigate("/TrailCards")
	};
    return (
        <div>
        {/* Main content */}
            <div className="search-page">
                <h1 className="search-title">How can we help you see the beauty of the world today?</h1>
                <div className="search-bar">
                <input type="text" placeholder="Type in your ideal trail..." />
                <button onClick={handleItemClick}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;