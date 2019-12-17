import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import './App.css';
import SignUp from './components/auth/SignUp';
import Navbar from './components/layout/Navbar';
import LogOut from './components/auth/LogOut';
import Vacations from './components/vacations/Vacations';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/logout' component={LogOut} />
          <Route path='/vacations' component={Vacations} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
