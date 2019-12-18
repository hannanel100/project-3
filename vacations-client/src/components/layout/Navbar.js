import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
    console.log(props)
    return (
        <nav className="nav-wrapper #a1887f brown lighten-2">
            <div className="container">
                <Link to='/' className="brand-logo left">{props.siteName} </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar
