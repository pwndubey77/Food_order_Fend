import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../screens/home/Home";

/**
 * Class component for controller
 * @class Controller
 * @extends {Component}
 */
class Controller extends Component {
  baseUrl = "http://localhost:8080/api/";

  render() {
    return (
      <Router>
        <div className="main-container">
          {/* <Route
            exact
            path="/"
            render={props => <Login {...props} baseUrl={this.baseUrl} />}
          /> */}
          <Route
            path="/"
            render={props => <Home {...props} baseUrl={this.baseUrl} />}
          />
          {/* <Route
            path="/profile"
            render={props => <Profile {...props} baseUrl={this.baseUrl} />}
          /> */}
        </div>
      </Router>
    );
  }
}

export default Controller;
