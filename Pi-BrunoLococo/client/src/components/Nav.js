import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <Link to="create">
                <p>Create Poke</p>
            </Link>
        </div>
    )
}

export default NavBar