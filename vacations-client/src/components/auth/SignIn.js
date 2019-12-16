import React, { Component } from 'react'
import axios from 'axios';

class SignIn extends Component {
    state = {
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
        const auth = async () => {
            try {
                const res = await axios.get('/authenticate', { auth: { username: 'admin', password: '123' } });
                console.log(res.data);
            } catch (e) {
                console.log(e);
            }
        };
    }
    handleSignUp = (e) => {
        console.log("clicked sign up");

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="transparentBG">
                    <h5 className="white-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="userName" className="white-text text-darken-3">userName</label>
                        <input type="text" id="userName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" className="white-text text-darken-3">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                        <div className="input-field">
                            <button className="btn #4dd0e1 cyan lighten-2 z-depth-0">Login</button>
                        </div>
                    </div>
                </form>
                <div>

                    <div className="input-field center">
                        <span className="white-text text-darken-3">New User?</span>
                        <button className="btn #4dd0e1 cyan lighten-2 z-depth-0" id="signUpBtn" onClick={this.handleSignUp}>Sign Up</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignIn
