import React, { Component } from 'react'
import SingleVacation from './SingleVacation'

class Vacations extends Component {
    state = {
        vacations: []
    }

    vacations = [{
        "description": "The Maldives",
        "price": "700",
        "picture": "some-link",
        "dates": "1/1/20-5/1/20"
    },
    {
        "description": "Cuba",
        "price": "400",
        "picture": "some-link",
        "dates": "1/1/20-5/1/20"
    },
    {
        "description": "Australia",
        "price": "1500",
        "picture": "some-link",
        "dates": "1/1/20-5/1/20"
    },
    {
        "description": "USA",
        "price": "1000",
        "picture": "some-link",
        "dates": "1/1/20-5/1/20"
    },
    {
        "description": "The Alpes",
        "price": "500",
        "picture": "some-link",
        "dates": "1/1/20-5/1/20"
    }]
    render() {
        let vacationsToRender = this.vacations.map(item => <SingleVacation vacation={item} key={item.index} />);

        // for (let i = 0; i < this.vacations.length; i++) {
        //     vacationsToRender.push(<SingleVacation vacation={this.vacations[i]} />)
        // }

        return (
            <div>
                {vacationsToRender}
            </div>
        )
    }
}

export default Vacations
