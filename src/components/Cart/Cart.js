import React from 'react';
import './Cart.css';
import { currentDiscount, currentDiscountedElements } from '../../containers/Main/Main';
import { catalog } from '../../utilities/catalog';
import CartButtons from '../Buttons/CartButtons/CartButtons';
import Cards from '../Card/Cards/Cards'


const Cart = props => {
  let totalDue = props.cart.reduce((acc, curr) => {
    let target = catalog.find(el => el.title === curr);
    let targetPrice = target.price;
    if (currentDiscountedElements.includes(target.title)) { targetPrice = Math.round(targetPrice - ((targetPrice / 100) * currentDiscount)) }
    return acc + targetPrice
  }, 0)

  let productsAndTotal = <div style={{ width: '100%', height: '100%' }}>
    <Cards
      cart={props.cart}
      showDescription={props.showDescription}
      adjustQuantity={props.adjustQuantity}
    />
    <p id='totalDue'><span>Total: </span>{`${totalDue.toFixed(2)}`}$</p>
  </div>
  return (
    <div id='cart-box-wrapper' className={props.fullPage ? 'full-view' : 'normal-view'} >
      <CartButtons
        clickFull={props.fullView}
        clickClose={props.clickToggle}
      />
      <div id='inner-cart-box'>
        {totalDue ? productsAndTotal : <p id='empty-cart-message'>You have currently no items in the cart</p>}
      </div>
    </div>
  )
}

export default Cart





