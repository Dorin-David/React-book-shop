import { Component } from "react";
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        books: null,
        totalPrice: null
    }

    componentDidMount() {
        let booksFromParams = new URLSearchParams(this.props.location.search);
        let parsedBooks = {};
        let totalPrice = null;
        for (let [key, qty] of booksFromParams.entries()) {
            if (key === 'totalPrice') {
                totalPrice = qty;
            } else {
                parsedBooks[key] = qty
            }

        }
        this.setState({ books: parsedBooks, totalPrice: totalPrice })
    }

    render() {
        return (
            <div>
                <ContactData 
                books={this.state.books} 
                price={+this.state.totalPrice} 
                click={this.goToCheckout}
                {...this.props} />
            </div>
        )
    }
}

export default Checkout