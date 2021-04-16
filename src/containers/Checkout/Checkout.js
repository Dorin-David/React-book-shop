import { useState, useEffect } from "react";
import ContactData from "./ContactData/ContactData";

const Checkout = (props) => {
  const [orderState, setOrderState] = useState({
    books: null,
    totalPrice: null,
  });

  useEffect(() => {
    //switch URL querying with useContext
    const booksFromParams = new URLSearchParams(props.location.search);
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
  }, [props.location.search]);

  return (
    <div>
      <ContactData
        books={orderState.books}
        price={+orderState.totalPrice}
        {...props}
      />
    </div>
  );
};

export default Checkout;
