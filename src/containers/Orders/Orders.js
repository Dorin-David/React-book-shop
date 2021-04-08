import { Component } from "react";
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';


class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                let fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        date: res.data[key].date,
                        id: key
                    })
                }
               
                this.setState({ loading: false, orders: fetchedOrders })

            })
            .catch(rej => {
                this.setState({ loading: false })
            })
    }

    componentWillUnmount(){
        this.props.history.push('/')
    }

    render() {

        let orders = (<div>
            {this.state.orders.map(order => (
                <Order 
                key={order.id}
                books={order.books}
                price={order.price}
                date={order.date}
                orderNumber={order.id}
                />
            ))}
        </div>);
        if(this.state.loading) {
            orders = <Spinner />
        }
        return orders
    }
}

export default Orders