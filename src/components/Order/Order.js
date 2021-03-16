import React from 'react';
import './Order.css';
import { catalog } from '../../utilities/catalog';
import { getReadableDate } from '../../utilities/utilities';
import OrderCard from '../Card/OrderCard/OrderCard';


const order = props => {
    const images = {}
    for (let item of catalog) {
        images[item.title] = item.img
    }

    const books = [];
    for (let item in props.books) {
        books.push({ name: item, amount: props.books[item].split(' ')[0], author:  props.books[item].split(' ')[1].replace('_', ' '), img: images[item] })
    }

    let mappedBooks = books.map(item => {
        return (
            <OrderCard 
            key={item.name}
            name={item.name}
            img={item.img}
            author={item.author}
            amount={item.amount}
            />
        )
    })
    return (<div className='order-summary'>
        <div className='order-info'>
            <div>
                <p>Total</p>
                <span>{props.price}$</span>
            </div>
            <div>
                <p>Date</p>
                <span>{getReadableDate(props.date)}</span>
            </div>
            <div>
                <p>Order #</p>
                <span>{props.orderNumber}</span>
            </div>
        </div>
        {mappedBooks}

    </div>)
}

export default order