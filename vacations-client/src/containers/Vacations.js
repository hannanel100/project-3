import React, { Component } from 'react'
import SingleVacation from '../components/vacations/SingleVacation'

//TODO: allow vacation to accept single user ID
class Vacations extends Component {
    state = {
        vacations: []
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
        let vacationsToRender = this.state.vacations.map((item, index) => <SingleVacation vacation={item} key={index} />);

        return (
            <div>
                {vacationsToRender}
            </div>
        )
    }
}


export default Vacations;
