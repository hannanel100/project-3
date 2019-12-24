import React, { Component } from 'react'

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            newUser: {
                firstName: '',
                lastName: '',
                userName: '',
                password: ''
            }
        }
    }
    handleChange = (property, value) => {
        let newUser = this.state.newUser;
        newUser[property] = value;
        this.setState({
            newUser
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (

            <form onSubmit={this.props.handleSubmit} className="transparentBG">
                <h5 className="white-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName" className="white-text text-darken-3">First Name</label>
                    <input type="text" id="firstName" value={this.state.newUser.firstName} onChange={(e) => this.handleChange(e.target.id, e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName" className="white-text text-darken-3">Last Name</label>
                    <input type="text" id="lastName" value={this.state.newUser.lastName} onChange={(e) => this.handleChange(e.target.id, e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="userName" className="white-text text-darken-3">User Name</label>
                    <input type="text" id="userName" value={this.state.newUser.userName} onChange={(e) => this.handleChange(e.target.id, e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="password" className="white-text text-darken-3">Password</label>
                    <input type="password" id="password" value={this.state.newUser.password} onChange={(e) => this.handleChange(e.target.id, e.target.value)} />
                    <div className="input-field">
                        <button className="btn #4dd0e1 cyan lighten-2 z-depth-0">Sign Up</button>
                    </div>
                </div>
            </form>

        )
    }
}

export default SignUpForm;

