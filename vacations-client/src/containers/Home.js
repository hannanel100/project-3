import React, { Component } from 'react'
import { connect } from 'react-redux'
class Home extends Component {
    render() {
        return (
            <div className="home-page   ">
                Home
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

