import React, { Component } from 'react'
import SingleVacation from '../components/vacations/SingleVacation'
import { connect } from 'react-redux';
import { likeAction, unLikeAction } from '../actions/userActions';
//TODO: allow vacation to accept single user ID
class Vacations extends Component {
    state = {
        vacations: [],
        userId: null
    }

    likeHandler = (user, vacation) => {
        if (this.props.liked.includes(vacation)) {
            this.props.unLike(user, vacation)
        }
        else {
            this.props.like(user, vacation);
        }
        console.log(user, vacation)



    }
    async componentDidMount() {
        const response = await fetch("http://localhost:5000/vacations", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            Accept: "application/json",
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer" // no-referrer, *client
            // body data type must match "Content-Type" header
        });
        const vacationsFromFetch = await response.json();
        this.setState({ vacations: vacationsFromFetch });
    }

    render() {
        let vacationsToRender = this.state.vacations.map((item, index) => <SingleVacation vacation={item} key={index} likeHandler={this.likeHandler} />);

        return (
            <div>
                {vacationsToRender}
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        userId: state.userReducers.userId,
        liked: state.userReducers.liked
    }
}
const mapDispatchToProps = dispatch => {
    return {
        like: (user, vacation) => {
            dispatch(likeAction(user, vacation))
        },
        unLike: (user, vacation) => {
            dispatch(unLikeAction(user, vacation))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Vacations);


