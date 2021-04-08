import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from '../src/containers/Orders/Orders';
import OrderConfirm from '../src/components/OrderConfirm/orderConfirm';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/order-confirm' component={OrderConfirm}/>
      <Route path='/orders' component={Orders} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/" exact component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


