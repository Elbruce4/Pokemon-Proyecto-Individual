import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <Link to="create">
                <p>Create Poke</p>
            </Link>
            <Link to="/home">
                <h1>Henry Pokemon</h1>
            </Link>
        </div>
    )
}

export default NavBar