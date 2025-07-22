import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <NavLink to="/" className={({ isActive, isPending, isTransitioning }) => [
                isPending ? "pending" : "",
                isActive ? "navActive" : "",
                isTransitioning ? "" : ""
            ].join(" ")}>Home</NavLink>
            <NavLink to="/post">Post</NavLink>
            {/* <Link to="/post">Post</Link> */}
        </header >
    )
}

export default Header