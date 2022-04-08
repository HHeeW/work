import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render(){
       return (
        <header>
            <h1>{this.props.title}</h1>
            <p>{this.props.desc}</p>
        </header>
       );
    }
  }

  export default Header;