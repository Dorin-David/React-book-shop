import React from 'react';
import './NavBar.css';
import { FaShoppingCart, FaSearch } from 'react-icons/fa'

const NavBar = (props) => {
    return (
        <div className='nav-container'>
            <div id='search'>
                <input type='text' placeholder='search book/author' onChange={props.handleSearch} value={props.value} />
                <button type="submit"><FaSearch className={'search-icon'} onClick={props.handleSearch} title='search' /></button>
            </div>
            <FaShoppingCart id='cart' onClick={props.onClick} title='open cart' />
        </div>
    )
}

export default NavBar