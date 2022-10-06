import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <article style={{display: 'inline-block'}}>
                <img id="logo" src="logo.png" alt="page logo" style={{width: '5rem', height: '5rem'}} />  
            </article>
            <article style={{float: 'right'}}>
                <NavLink to="/" exact="true" className="bg-lime-500">Home</NavLink>
                <NavLink to="/characters" exact="true" className="bg-lime-500">Characters</NavLink>
                <NavLink to="/locations" exact="true" className="bg-lime-500">Locations</NavLink>
                <NavLink to="/episodes" exact="true" className="bg-lime-500">Episodes</NavLink>
            </article>
        </nav>
    )
}

export default NavBar;