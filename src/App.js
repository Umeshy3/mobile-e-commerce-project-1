import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Modal from './components/Modal';



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/Details" component={Details}></Route>
        <Route path="/Cart" component={Cart}></Route>
        <Route component={Default} />
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
