import React from 'react';
import './Main.css';
import { DisplayCatalog, currentDiscountedElements, currentDiscount } from '../../components/DisplayCatalog/DisplayCatalog';
import { FaTh, FaThLarge } from 'react-icons/fa';

const Main = props => (
    <div class='main-container'>
        <div className='description-container'>
            <h1>Hello</h1>
            <h2>Explore our range of books</h2>
        </div>
        <div id='books-container' >
            <div className='display-wrapper'>
                <FaTh id='normal-display' onClick={props.displayProducts.bind(this, 'normal')} title='default display' />
                <FaThLarge id='large-display' onClick={props.displayProducts.bind(this, 'large')} title='large display' />
            </div>
            <DisplayCatalog
                display={props.display}
                showDescription={props.showDescription}
                click={props.click}
                catalog={props.catalog}
            />
        </div>
    </div>
)

export { Main, currentDiscount, currentDiscountedElements }