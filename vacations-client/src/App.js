import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { changeSiteName } from "./actions/siteActions";

import SignIn from "./containers/SignIn";
import "./App.css";
import SignUp from "./containers/SignUp";
import Navbar from "./components/layout/Navbar";
import LogOut from "./containers/LogOut";
import Vacations from "./containers/Vacations";
import Home from "./containers/Home";
import PrivateRoute from "./containers/PrivateRoute";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar siteName={"vacation tagger"} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/logout" component={LogOut} />
            {/* TODO: change to specific ID of user */}

            <PrivateRoute path="/vacations/:userID" component={Vacations} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {

  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeSiteName(newSiteName) {
      dispatch(changeSiteName(newSiteName));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
