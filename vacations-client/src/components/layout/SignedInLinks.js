import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/vacations'>Vacations</NavLink></li>
            <li><NavLink to='/logout'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating #4dd0e1 cyan lighten-2'>HG</NavLink></li>
        </ul>
    )
}

export default SignedInLinks