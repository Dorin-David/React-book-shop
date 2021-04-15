import { useState, useEffect } from "react";
import ContactData from "./ContactData/ContactData";

const Checkout = (props) => {
  const [orderState, setOrderState] = useState({
    books: null,
    totalPrice: null,
  });

  useEffect(() => {
      //switch URL querying with useContext
    const booksFromParams = new URLSearchParams(this.props.location.search);
    const parsedBooks = {};
    let totalPrice = null;
    for (let [key, qty] of booksFromParams.entries()) {
      if (key === "totalPrice") {
        totalPrice = qty;
      } else {
        parsedBooks[key] = qty;
      }
    }
    setOrderState({ books: parsedBooks, totalPrice: totalPrice });
  }, []);

  return (
    <div>
      <ContactData
        books={orderState.books}
        price={+orderState.totalPrice}
        click={this.goToCheckout}
        {...props}
      />
    </div>
  );
};

export default Checkout;
