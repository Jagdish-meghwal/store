import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import { Switch, Route } from 'react-router-dom';
import Details from './components/Details';

class App extends Component {
  render(){
    return(
      <Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ ProductList } ></Route>
          <Route path="/cart" component={ Cart } ></Route>
          <Route path="/details" component={ Details } ></Route>
          <Route component={ Default } ></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
