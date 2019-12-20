import React, { Component } from 'react'
import { connect } from 'react-redux'
class Admin extends Component {
    render() {
        return (
            <div className="admin-page   ">
                Admin
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
