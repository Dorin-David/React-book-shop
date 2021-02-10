import React from 'react';
import '../Styles/cart.css';
import {currentDiscount, currentDiscountedElements} from './Main';


class Cart extends React.Component{
   constructor(props){
     super(props)
     this.state = {
       fullPage: false
     }
     this.fullView = this.fullView.bind(this)
   }
  
   fullView(){
     this.setState(state => ({
       fullPage: !state.fullPage
     }))
   }

   render(){
    let totalDue = 0;
    let inCartItems = Array.from(new Set(this.props.cart)).map(element => { 
     let currentElement = this.props.catalog.find(item => item.title === element);
     let numberOfItems = this.props.cart.filter(el => el === element).length;
     let price = currentElement.price;
     if(currentDiscountedElements.includes(element)) {price = Math.round(price - ((price / 100) * currentDiscount))}
     totalDue += (price * numberOfItems);
    
      return (
         //give keys to each child
          <div className='cart-card' key={currentElement.img.slice(5, 10)}>
            <img key = {currentElement.img.match(/.{5}(?=.jpg)/)[0]} src={currentElement.img} alt={currentElement.title}
            onClick={this.props.showDescription.bind(this, currentElement)} title='view description'
            />
            <div className='card-description' key={currentElement.title + currentElement.author}> {/*need key here */}
            <h1 key={currentElement.title}>{currentElement.title}</h1>
            <h2 key={currentElement.author}>{ currentElement.author}</h2>
            </div>
             
             <div className='buttons-wrapper' key={currentElement.price + currentElement.author}>
            <i className="fas fa-plus-square cart-btn" id='increase-btn' key='increase-btn'onClick={this.props.btnClick.bind(this, 'add', currentElement.title)} title='increase qty'></i>
            <i className="fas fa-minus-square cart-btn" id='decrease-btn' key='decrease-btn' onClick={this.props.btnClick.bind(this, 'remove', currentElement.title)} title='decrease qty'></i>
            <i className="fas fa-trash-alt cart-btn" id='remove-btn' key='remove-btn' onClick={this.props.btnClick.bind(this, 'delete', currentElement.title)} title='remove from cart'></i>
            <p key={price}>{` x ${numberOfItems} -   ${(price * numberOfItems).toFixed(2)}$`}</p>
            </div>
            
          </div>
      )
    })
    let productsAndTotal = <div style={{width: '100%', height: '100%'}}>{inCartItems} <p id='totalDue'><span>Total: </span>{`${totalDue.toFixed(2)}`}$</p></div>
    return (
     <div id='cart-box-wrapper' className={this.state.fullPage ? 'full-view' : 'normal-view'} >
         <div className='btn-wrapper'>
         <i className="far fa-square" id='full-btn' onClick={this.fullView} title='expand cart'></i>
         <i className="fas fa-window-close"  id='close-btn' onClick={this.props.onClick} title='close cart'></i>
         </div>
     <div id='inner-cart-box'>
       {totalDue ? productsAndTotal : <p id='empty-cart-message'>You have currently no items in the cart</p>}
   </div>
   </div>
 
    )
   }
         
}

export default Cart





