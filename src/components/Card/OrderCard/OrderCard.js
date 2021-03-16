import React from 'react';
import './OrderCard.css'

const orderCard = props => (
    <div key={props.name} className='order-card'>
        <img src={props.img} width='120px' height='140px' alt={props.name} />
        <div className='order-card-info'>
            <p className='title'>{props.name}</p>
            <p className='author'>{props.author}</p>
            <p className='qty'> quantity:{props.amount}</p>
        </div>
    </div>
)

export default orderCard