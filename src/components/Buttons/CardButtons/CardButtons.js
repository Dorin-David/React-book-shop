import React, {Fragment} from 'react';
import { FaPlusSquare, FaMinusSquare, FaTrashAlt} from 'react-icons/fa';

const cardButtons = props => (
        <Fragment>
            <FaPlusSquare className='cart-btn' id='increase-btn'  onClick={props.add} title='increase qty' />
            <FaMinusSquare className="cart-btn" id='decrease-btn'  onClick={props.remove} title='decrease qty' />
            <FaTrashAlt className="cart-btn" id='remove-btn' onClick={props.delete} title='remove from cart' />
        </Fragment>
)

export default cardButtons