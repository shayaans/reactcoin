import React, { Component } from 'react';
import {Button} from 'reactstrap';
import logo from '../../logo.svg';
import './MainBody.css';

class Header extends Component {
    render() {
      return (
        <div className="MainBody">
          <p className="MainBody-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="danger">Danger!</Button>
        </div>
      );
    }
  }
  
  export default Header;
  

