import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="transparentBG">
                    <h5 className="white-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName" className="white-text text-darken-3">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName" className="white-text text-darken-3">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="userName" className="white-text text-darken-3">userName</label>
                        <input type="text" id="userName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" className="white-text text-darken-3">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                        <div className="input-field">
                            <button className="btn #4dd0e1 cyan lighten-2 z-depth-0">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
