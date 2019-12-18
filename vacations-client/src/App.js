import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import SignIn from './components/auth/SignIn';
import './App.css';
import SignUp from './components/auth/SignUp';
import Navbar from './components/layout/Navbar';
import LogOut from './components/auth/LogOut';
import Vacations from './components/vacations/Vacations';

class App extends Component {
  render() {
    console.log(this.props)
    return (

      <BrowserRouter>
        <div className="App">
          <Navbar siteName={this.props.siteName} />
          <Switch>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/logout' component={LogOut} />
            <Route path='/vacations' component={Vacations} />
          </Switch>
        </div>
      </BrowserRouter >

    );
  }

}
const mapStateToProps = state => {
  return {
    siteName: state.siteName
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeSiteName(newSiteName) {
      dispatch({
        type: "CHANGE_SITE_NAME",
        payload: newSiteName
      })

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
