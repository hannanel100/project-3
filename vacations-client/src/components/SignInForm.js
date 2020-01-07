import React, { Component } from "react";


class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        userName: "",
        password: ""
      }
    };
  }
  handleChange = (property, value) => {
    let user = this.state.user;
    user[property] = value;
    this.setState({
      user
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handlerLogin(this.state.user.userName, this.state.user.password);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="transparentBG">
        <h5 className="white-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="userName" className="white-text text-darken-3">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            value={this.state.user.userName}
            onChange={e => this.handleChange(e.target.id, e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password" className="white-text text-darken-3">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={this.state.user.password}
            onChange={e => this.handleChange(e.target.id, e.target.value)}
          />
          <div className="input-field">
            <button className="btn #4dd0e1 cyan lighten-2 z-depth-0">
              Login
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SignInForm;
