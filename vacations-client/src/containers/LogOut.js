import React, { Component } from 'react'
import { connect } from 'react-redux'

class LogOut extends Component {
    render() {
        return (
            <div>
                <h1>You Are Signed Out</h1>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
