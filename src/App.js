import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateProduct from './components/create-product.component';
import Products from './components/products.component';
import EditProduct from "./components/edit-product.component";

function App() {
  return (<Router>
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a  href="/#" className="navbar-brand">React Axios Tutorial</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/create-product"}>Create Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/products"}>Products List</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={Products} />
              <Route path="/create-product" component={CreateProduct} />
              <Route path="/edit-product/:id" component={EditProduct} />
              <Route path="/products" component={Products} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
