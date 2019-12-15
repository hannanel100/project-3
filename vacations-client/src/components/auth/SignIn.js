import React, { Component } from 'react'

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
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="transparentBG">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="userName">userName</label>
                        <input type="text" id="userName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                        <div className="input-field">
                            <button className="btn #4dd0e1 cyan lighten-2 z-depth-0">Login</button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
