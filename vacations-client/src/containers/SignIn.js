import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignInForm from '../components/SignInForm';
import { loginAction } from '../actions/userActions';
class SignIn extends Component {


    handlerLogin = (userName, password) => {
        this.props.login(userName, password);
    }

    render() {
        return (
            <div className="container">
                <SignInForm handlerLogin={this.handlerLogin} />
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

    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (userName, password) => {
            dispatch(loginAction(userName, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
