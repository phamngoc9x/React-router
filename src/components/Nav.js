import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top">React Router</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/news">Tin tức</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/details">Tin chi tiết</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Nav;