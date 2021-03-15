import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={App} />
    <Route path="/checkout" component={Checkout} />
  </BrowserRouter>,
  document.getElementById('root')
);


