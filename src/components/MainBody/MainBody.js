import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './MainBody.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <div className="MainBody">
          <p className="MainBody-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
      );
    }
  }
  
  export default Header;
  

