import React from 'react';
import './Cart.css';
import { currentDiscount, currentDiscountedElements } from '../Main/Main';
import { catalog } from '../../utilities/catalog';
import CartButtons from '../../components/Buttons/CartButtons/CartButtons';
import Cards from '../../components/Card/Cards/Cards'


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

    let totalDue = this.state.cart.reduce((acc, curr) => {
      let target = catalog.find(el => el.title === curr);
      let targetPrice = target.price;
      if (currentDiscountedElements.includes(target.title)) { targetPrice = Math.round(targetPrice - ((targetPrice / 100) * currentDiscount)) }
      return acc + targetPrice
    }, 0)

    let productsAndTotal = <div style={{ width: '100%', height: '100%' }}>
      <Cards
        cart={this.state.cart}
        showDescription={this.props.showDescription}
        adjustQuantity={this.adjustQuantity}
      />
      <p id='totalDue'><span>Total: </span>{`${totalDue.toFixed(2)}`}$</p></div>
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





