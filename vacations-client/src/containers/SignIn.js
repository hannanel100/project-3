import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignInForm from '../components/SignInForm';

class SignIn extends Component {



    render() {
        return (
            <div className="container">
                <SignInForm />
                <div>

                    <div className="input-field center">
                        <span className="white-text text-darken-3">New User?</span>
                        <a href="/signup">
                            <button className="btn #4dd0e1 cyan lighten-2 z-depth-0" id="signUpBtn" >Sign Up</button>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        siteName: state.siteName
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
