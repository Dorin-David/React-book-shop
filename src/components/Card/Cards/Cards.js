import React from 'react';
import { currentDiscount, currentDiscountedElements } from '../../Main/Main';
import { catalog } from '../../../utilities/catalog';
import Card from '../Card'

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


// <div className='cart-card' key={currentElement.img.slice(5, 10) + Math.random()}>
//                 <img key={currentElement.img.match(/.{5}(?=.jpg)/)[0]} src={currentElement.img} alt={currentElement.title}
//                     //here                     
//                     onClick={props.showDescription.bind(null, currentElement)} title='view description'
//                 />

//                 <DescriptionCard
//                     key={currentElement.title + currentElement.author}
//                     title={currentElement.title}
//                     author={currentElement.author}
//                 />

//                 <div className='buttons-wrapper' key={currentElement.price + currentElement.author}>
//                     <CardButtons key='btn-manager'
//                         //here
//                         add={props.adjustQuantity.bind(null, 'add', currentElement.title)}
//                         remove={props.adjustQuantity.bind(null, 'remove', currentElement.title)}
//                         delete={props.adjustQuantity.bind(null, 'delete', currentElement.title)}
//                     />
//                     <p key={price}>{` x ${numberOfItems} -   ${(price * numberOfItems).toFixed(2)}$`}</p>
//                 </div>


//             </div>