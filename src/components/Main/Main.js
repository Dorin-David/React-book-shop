import React from 'react';
import './Main.css';
import { DisplayCatalog, currentDiscountedElements, currentDiscount } from '../DisplayCatalog/DisplayCatalog';
import MainButtons from '../Buttons/MainButtons/MainButtons'

const Main = props => (
    <div class='main-container'>
        <div className='description-container'>
            <h1>Books for life</h1>
            <h2>Explore our range of books</h2>
        </div>
        <div id='books-container' >
            <MainButtons displayProducts={props.displayProducts} />
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