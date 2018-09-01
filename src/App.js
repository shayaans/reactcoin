import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainBody />
      </div>
    );
  }
}

export default App;
