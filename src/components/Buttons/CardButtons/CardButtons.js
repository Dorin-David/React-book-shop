import React, {Fragment} from 'react';
import { FaPlusSquare, FaMinusSquare, FaTrashAlt} from 'react-icons/fa';

/*
<div className='buttons-wrapper' key={currentElement.price + currentElement.author}>
            <FaPlusSquare className='cart-btn' id='increase-btn' key='increase-btn' onClick={this.props.btnClick.bind(this, 'add', currentElement.title)} title='increase qty' />
            <FaMinusSquare className="cart-btn" id='decrease-btn' key='decrease-btn' onClick={this.props.btnClick.bind(this, 'remove', currentElement.title)} title='decrease qty' />
            <FaTrashAlt className="cart-btn" id='remove-btn' key='remove-btn' onClick={this.props.btnClick.bind(this, 'delete', currentElement.title)} title='remove from cart' />
            <p key={price}>{` x ${numberOfItems} -   ${(price * numberOfItems).toFixed(2)}$`}</p>
          </div>
*/

const cardButtons = props => (
        <Fragment>
            <FaPlusSquare className='cart-btn' id='increase-btn'  onClick={props.add} title='increase qty' />
            <FaMinusSquare className="cart-btn" id='decrease-btn'  onClick={props.remove} title='decrease qty' />
            <FaTrashAlt className="cart-btn" id='remove-btn' onClick={props.delete} title='remove from cart' />
        </Fragment>
)

export default cardButtons