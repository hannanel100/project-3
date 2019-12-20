import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUpForm from '../components/SignUpForm'
class SignUp extends Component {


    render() {
        return (
            <div className="container">
                <SignUpForm />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

