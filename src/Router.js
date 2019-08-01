import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import productList from './pages/Admin/productList';
import dashboard from './pages/Admin/dashboard';

class BasicRoute  extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/product'>产品页面</Link></li>
          </ul>
          <hr/>
          <Route exact path="/"  component={dashboard} />
          <Route path="/product" component={productList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BasicRoute ;
