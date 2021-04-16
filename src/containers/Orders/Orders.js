import { useState, useEffect } from "react";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-orders";

const Orders = (props) => {
  const [ordersSummary, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { history } = props;

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            date: res.data[key].date,
            id: key,
          });
        }
        setOrders(fetchedOrders);
        setLoading(false);
      })
      .catch((rej) => {
        setLoading(false);
      });

    return () => {
      history.push("/");
    };
  }, [history]);

  let orders = (
    <div>
      {ordersSummary.map((order) => (
        <Order
          key={order.id}
          books={order.books}
          price={order.price}
          date={order.date}
          orderNumber={order.id}
        />
      ))}
    </div>
  );
  if (loading) {
    orders = <Spinner />;
  }
  return orders;
};

export default Orders;
