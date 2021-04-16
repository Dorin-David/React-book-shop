import { currentDiscount, currentDiscountedElements } from '../Main/Main';
import { catalog } from '../../utilities/catalog';
import CartButtons from '../Buttons/CartButtons/CartButtons';
import Cards from '../Card/Cards';
import Button from '../UI/Button/Button';
import './Cart.css';


const Cart = props => {

  const goToCheckout = () => {
    const authors = {}

    let totalDue = props.cart.reduce((acc, curr) => {
      let target = catalog.find(el => el.title === curr);
      authors[target.title] = target.author;
      let targetPrice = target.price;
      if (currentDiscountedElements.includes(target.title)) { targetPrice = Math.round(targetPrice - ((targetPrice / 100) * currentDiscount)) }
      return acc + targetPrice
    }, 0)

    let items = [...props.cart].reduce((accum, book) => {
      if (!accum[book]) {
        accum[book] = 1;
        return accum
      } else {
        accum[book]++
        return accum
      }
    }, {});
    let books = [];
    for (let book in items) {
      books.push(encodeURIComponent(book) + '=' + encodeURIComponent(items[book]) + ' ' + encodeURIComponent(authors[book].replace(' ', '_')))
    }
    books.push('totalPrice=' + encodeURIComponent(totalDue.toFixed(2)))

    props.history.push({
      pathname: '/checkout',
      search: '?' + books.join('&')
    })
  }

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
    <p id='totalDue'>
      <span>Total: </span>{`${totalDue.toFixed(2)}`}$
        <Button click={goToCheckout} btnClass={['checkout-btn']} >
        Checkout
          </Button>
    </p>
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





