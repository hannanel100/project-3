import React, { Component } from 'react'
import SingleVacation from '../components/vacations/SingleVacation'
import { connect } from 'react-redux';
import { likeAction, unLikeAction } from '../actions/userActions';
//TODO: allow vacation to accept single user ID
class Vacations extends Component {
    state = {
        vacations: [],
        userId: null,
        color: 'default',
    }

    likeHandler = (user, vacation) => {
        let liked = this.state.vacations;
        if (this.props.liked.includes(vacation)) {
            this.props.unLike(user, vacation);
            const unLikedIdx = liked.findIndex(item => item.vacation.id == vacation);
            liked[unLikedIdx].isLiked = false;
            this.setState({ vacations: liked });
            const unLikeColor = 'default';
            this.setState({ color: unLikeColor });
        }
        else {
            this.props.like(user, vacation);
            const likeIdx = liked.findIndex(item => item.vacation.id == vacation);
            liked[likeIdx].isLiked = true;
            this.setState({ vacations: liked });
            const likeColor = 'secondary';
            this.setState({ color: likeColor });
        }
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
        let vacations = [];
        vacationsFromFetch.forEach(element => {
            const obj = {
                "vacation": element,
                "isLiked": false

            };
            vacations.push(obj);
        });
        this.setState({ vacations: vacations });

    }

    render() {
        let vacationsToRender = this.state.vacations.map((item, index) => {
            return <SingleVacation vacation={item.vacation} isLiked={item.isLiked} key={index} likeHandler={this.likeHandler} color={this.state.color} />
        });

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


