import React from "react";
import "./app-header.css"

const Header = ({liked, allPosts}) => {
    return <div className='app-header d-flex'>
        <h1>Власенко Иван</h1>
        <h2>{allPosts} постов , {liked} понравившихся </h2>
    </div>
};

export default Header;

