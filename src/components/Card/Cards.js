import React from 'react';
import { currentDiscount, currentDiscountedElements } from '../Main/Main';
import { catalog } from '../../utilities/catalog';
import Card from './Card/Card'

const cards = props => (
    Array.from(new Set(props.cart)).map(element => {
        let currentElement = catalog.find(item => item.title === element);
        let numberOfItems = props.cart.filter(el => el === element).length;
        let price = currentElement.price;
        if (currentDiscountedElements.includes(element)) { price = Math.round(price - ((price / 100) * currentDiscount)) }
        return (
            <Card
                key={currentElement.title}
                imageSrc={currentElement.img}
                imageAlt={currentElement.title}
                showDescription={props.showDescription}
                targetElement={currentElement}
                adjustQuantity={props.adjustQuantity}
                numberOfItems={numberOfItems}
                price={price}
            />
        )
    })

)





export default cards