import './Nav.css';
import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/names/jeremy">Made By Jeremy</NavLink>
        </nav> 
      </div>
    );
  }
}

export default Nav;