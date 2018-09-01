import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import AddressResult from './components/AddressResult/AddressResult';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App ">
          <Header />
          <Route exact path="/" component={MainBody} />
          <Route path="/addr/:id" component={AddressResult} />
        </div>

      </Router>
    );
  }
}

export default App;
