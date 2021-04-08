import React from 'react';
import Button from '../UI/Button/Button';
import './order-confirm.css'

const orderConfirm = props => (
    <div className='confirm-order-modal'>
            <h1>Thank you!</h1>
            <p>Your order has been placed successfully</p>
            <Button 
            btnClass='redirect-btn'
            click={() => props.history.push('/')}
            >Home</Button>
        </div>
)

export default orderConfirm