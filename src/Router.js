import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  // Link,
  Switch,
  Redirect
} from 'react-router-dom';

import productList from './pages/Admin/OnPageSEO/Products/ProductList/productList';
import dashboard from './pages/Admin/dashboard';

class BasicRoute  extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to='/admin/dashboard'></Redirect>} />
            <Route exact path="/admin" render={() => <Redirect to='/admin/dashboard'></Redirect>} />
            <Route path="/admin/dashboard"  component={dashboard} />

            <Route exact path="/admin/on-page-seo" render={() => <Redirect to='/admin/on-page-seo/products'></Redirect>} />
            <Route path="/admin/on-page-seo/products" component={productList} />

            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default BasicRoute ;
