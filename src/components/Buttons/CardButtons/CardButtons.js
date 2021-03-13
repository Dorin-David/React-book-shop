import React from 'react';
import { FaPlusSquare, FaMinusSquare, FaTrashAlt } from 'react-icons/fa';
import './CardButtons.css'

const cardButtons = props => (
    <div className='buttons-wrapper'>
        <FaPlusSquare className='cart-btn' id='increase-btn' onClick={props.add} title='increase qty' />
        <FaMinusSquare className="cart-btn" id='decrease-btn' onClick={props.remove} title='decrease qty' />
        <FaTrashAlt className="cart-btn" id='remove-btn' onClick={props.delete} title='remove from cart' />
        {/* price below */}
        {props.children}
    </div>
)

export default cardButtons