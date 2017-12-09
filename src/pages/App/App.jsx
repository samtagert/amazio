import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import CataloguePage from '../CataloguePage/CataloguePage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import Nav from '../../components/Nav/Nav'

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: null
    }
  }

  componentDidMount() {
    fetch('/catalogue').then(data => data.json())
    .then(data => this.setState({products: data}))
  }

  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <WelcomePage
              
              />
            }/>
            <Route exact path='/catalogue' render={() =>
              <CataloguePage
              products={this.state.products}
              />
            }/>
            <Route exact path='/checkout' render={() =>
              <CheckoutPage
              />
            }/>
            <Route exact path='/confirmation' render={() =>
              <ConfirmationPage

              />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
