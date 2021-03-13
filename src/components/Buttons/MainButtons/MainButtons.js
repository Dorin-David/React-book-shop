import React from 'react';
import { FaTh, FaThLarge } from 'react-icons/fa';
import './MainButtons.css'

const mainButtons = props => (
    <div className='display-wrapper'>
        <FaTh id='normal-display' onClick={props.displayProducts.bind(this, 'normal')} title='default display' />
        <FaThLarge id='large-display' onClick={props.displayProducts.bind(this, 'large')} title='large display' />
    </div>
)

export default mainButtons