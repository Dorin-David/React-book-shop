import React from 'react';
import { FaShoppingCart, FaBox } from 'react-icons/fa';
import './NavButtons.css'

const navButtons = props => (
    <div className='nav-btn-wrapper'>
        <FaShoppingCart id='cart' onClick={props.clickCart} title='open cart' />
        <FaBox id="orders" title='see orders' onClick={props.clickOrders} />
    </div>
)

export default navButtons