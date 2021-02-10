import React from 'react';
import '../Styles/main.css';
import {catalog} from '../catalog'
import {getProperties, getRandomElements, getDiscount} from '../utilities'

let currentDiscountedElements = getRandomElements(getProperties(catalog, 'title'));
let currentDiscount = Math.floor(Math.random() * 20) <= 10 ? 10 : 20

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            display: 'normal'
        }
    }
    displayProducts(size){
        this.setState(() => ({
           display: size
        }))

    }

    render(){
        let displayCatalog = this.props.catalog.map(element => {
          let card = <div key={`${element.author}_${element.year}`} className={this.state.display === 'normal' ? 'card' : 'card large'}> 
                <img src={element.img} alt={element.title} key={element.img.match(/.{5}(?=.jpg)/)[0]} 
                onClick={this.props.showDescription.bind(this, element)} title='view description'/> 
                <h2 key={element.title}>{element.title}</h2>
                <h3 key={element.author}>{element.author}</h3>              
               <div key={element.price + element.title}>{getDiscount(currentDiscountedElements, element.title, element.price, currentDiscount, this.props.onClick.bind(this, element.title))}</div>
            </div>    
            return card
        }) 
        return (
            <div class='main-container'>
                 <div className='description-container'>
                 <h1>Books for life</h1>
                 <h2>Explore our range of books</h2>
                 </div>
                 <div id='books-container' >
                 <div className='display-wrapper'>
                   <i className="fas fa-th" id='normal-display' onClick={this.displayProducts.bind(this, 'normal')} title='default display'></i>
                  <i className="fas fa-th-large" id='large-display' onClick={this.displayProducts.bind(this, 'large')} title='large display'></i>
                 </div>
                 {displayCatalog}
                 </div>
            </div>
        )
    }
}

export {Main, currentDiscount, currentDiscountedElements}