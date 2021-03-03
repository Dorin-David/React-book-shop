import React from 'react';
import {catalog} from '../../utilities/catalog';
import {getProperties, getRandomElements, getDiscount} from '../../utilities/utilities';

let currentDiscountedElements = getRandomElements(getProperties(catalog, 'title'));
let currentDiscount = Math.floor(Math.random() * 20) <= 10 ? 10 : 20

const DisplayCatalog = props => (
    props.catalog.map(element => (
        <div key={`${element.author}_${element.year}`} className={props.display === 'normal' ? 'card' : 'card large'}> {/* pass display prop */}
                <img src={element.img} alt={element.title} key={element.img.match(/.{5}(?=.jpg)/)[0]} 
                onClick={props.showDescription.bind(this, element)} title='view description'/>  {/* pass showDescription function */}
                <h2 key={element.title}>{element.title}</h2>
                <h3 key={element.author}>{element.author}</h3>              
               <div key={element.price + element.title}>
                     {getDiscount(currentDiscountedElements, element.title, element.price, currentDiscount, 
                props.click.bind(this, element.title))} {/* pass onClick Handler */}

               </div>
            </div> 
    ))
)

export {DisplayCatalog, currentDiscountedElements, currentDiscount}