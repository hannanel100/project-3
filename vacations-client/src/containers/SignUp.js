import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUpForm from '../components/SignUpForm'
import { signUpAction } from '../actions/userActions';
class SignUp extends Component {
    componentWillMount() {
        if (this.props.isLogged === true) {
            this.props.history.push("/");
        }
    }
    handlerSignUp = (user) => {
        this.props.signUp(user)
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="container">
                <SignUpForm handlerSignUp={this.handlerSignUp} />
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
        signUp: (user) => {
            dispatch(signUpAction(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

