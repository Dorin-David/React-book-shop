import React from 'react';
import './Button.css';

const button = props => (
    <button 
    className='default-btn'
    onClick={props.click}
    >Checkout</button>
)

export default button

