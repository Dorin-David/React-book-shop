import React from 'react';
import '../Styles/main.css';
import {currentDiscount, elegiblesForDiscount} from '../catalog'

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
            let price = element.price;
            if(elegiblesForDiscount.includes(element.title)){
                price = Math.round(price - ((price / 100) * currentDiscount));
                price = <p key={price}><span className='discountedPrice' key={element.year / price}>{element.price}</span> {price}$ 
                <i className="fas fa-plus-square" id='add-btn-main' title='add to cart' onClick={this.props.onClick.bind(this, element.title)}/></p>;
                }  
                
          let card = <div key={`${element.author}_${element.year}`} className={this.state.display === 'normal' ? 'card' : 'card large'}> 
                <img src={element.img} alt={element.title} key={element.img.match(/.{5}(?=.jpg)/)[0]} 
                onClick={this.props.showDescription.bind(this, element)} title='view description'/> 
                <h2 key={element.title}>{element.title}</h2>
                <h3 key={element.author}>{element.author}</h3>              
              {typeof price == 'object' ? price : <p key={price}>{price}$ <i className="fas fa-plus-square" id='add-btn-main' title='add to cart' onClick={this.props.onClick.bind(this, element.title)}/></p>}
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

export default Main