import React from 'react';
import './Cart.css';
import { currentDiscount, currentDiscountedElements } from '../Main/Main';
import { catalog } from '../../utilities/catalog';
import CardButtons from '../../components/Buttons/CardButtons/CardButtons';
import CartButtons from '../../components/Buttons/CartButtons/CartButtons';
import DescriptionCard from '../../components/Card/DescriptionCard/DescriptionCard';


class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullPage: false,
      cart: [...this.props.cart]
    }
    this.fullView = this.fullView.bind(this);
    this.adjustQuantity = this.adjustQuantity.bind(this);
  }

  adjustQuantity(key, target) {
    if (key === 'add') {
      return this.setState(state => ({
        cart: [...state.cart, target]
      }));
    }
    if (key === 'remove') {
      let shallowCopy = Array.from(this.state.cart).filter((element, index, arr) => index !== arr.lastIndexOf(target))
      return this.setState(state => ({
        cart: shallowCopy
      }))
    }
    if (key === 'delete') {
      return this.setState(state => ({
        cart: [...state.cart.filter(el => el !== target)]
      }))
    }
  }

  fullView() {
    this.setState(state => ({
      fullPage: !state.fullPage
    }))
  }

  render() {
    let totalDue = 0;
    let inCartItems = Array.from(new Set(this.state.cart)).map(element => {
      let currentElement = catalog.find(item => item.title === element);
      let numberOfItems = this.state.cart.filter(el => el === element).length;
      let price = currentElement.price;
      if (currentDiscountedElements.includes(element)) { price = Math.round(price - ((price / 100) * currentDiscount)) }
      totalDue += (price * numberOfItems);

      return (
        //give keys to each child
        <div className='cart-card' key={currentElement.img.slice(5, 10)}>
          <img key={currentElement.img.match(/.{5}(?=.jpg)/)[0]} src={currentElement.img} alt={currentElement.title}
            onClick={this.props.showDescription.bind(this, currentElement)} title='view description'
          />

          <DescriptionCard 
            key={currentElement.title + currentElement.author}
            title={currentElement.title}
            author={currentElement.author}
          />

          <div className='buttons-wrapper' key={currentElement.price + currentElement.author}>
            <CardButtons key='btn-manager'
             add={this.adjustQuantity.bind(this, 'add', currentElement.title)}
             remove={this.adjustQuantity.bind(this, 'remove', currentElement.title)}
             delete={this.adjustQuantity.bind(this, 'delete', currentElement.title)}
            />
            <p key={price}>{` x ${numberOfItems} -   ${(price * numberOfItems).toFixed(2)}$`}</p>
          </div>

        </div>
      )
    })
    let productsAndTotal = <div style={{ width: '100%', height: '100%' }}>{inCartItems} <p id='totalDue'><span>Total: </span>{`${totalDue.toFixed(2)}`}$</p></div>
    return (
      <div id='cart-box-wrapper' className={this.state.fullPage ? 'full-view' : 'normal-view'} >
        <CartButtons 
         clickFull={this.fullView}
         clickClose={this.props.clickToggle}
        />
        <div id='inner-cart-box'>
          {totalDue ? productsAndTotal : <p id='empty-cart-message'>You have currently no items in the cart</p>}
        </div>
      </div>

    )
  }

}

export default Cart





