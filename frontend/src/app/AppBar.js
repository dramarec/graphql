
import React from 'react'
import { NavLink } from "react-router-dom"

const AppBar = () => {
    return (
        <div>
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'space-around', width: 400 }}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/customer">Registration</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default AppBar
