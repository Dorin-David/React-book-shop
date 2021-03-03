import React from 'react';
import './Main.css';
import { DisplayCatalog, currentDiscountedElements, currentDiscount } from '../../components/DisplayCatalog/DisplayCatalog';
import { FaTh, FaThLarge } from 'react-icons/fa';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 'normal'
        }
    }
    displayProducts(size) {
        this.setState(() => ({
            display: size
        }))
    }

    render() {

        return (
            <div class='main-container'>
                <div className='description-container'>
                    <h1>Books for life</h1>
                    <h2>Explore our range of books</h2>
                </div>
                <div id='books-container' >
                    <div className='display-wrapper'>
                        <FaTh id='normal-display' onClick={this.displayProducts.bind(this, 'normal')} title='default display' />
                        <FaThLarge id='large-display' onClick={this.displayProducts.bind(this, 'large')} title='large display' />
                    </div>
                    <DisplayCatalog
                        display={this.state.display}
                        showDescription={this.props.showDescription}
                        click={this.props.click}
                        catalog={this.props.catalog}
                    />
                </div>
            </div> 
        )
    }
}

export { Main, currentDiscount, currentDiscountedElements }