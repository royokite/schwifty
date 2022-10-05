import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <section>
            <img id="logo" src="logo.png" alt="page logo" style={{width: '10rem', height: '10rem'}} />
            <NavLink to="/" exact="true" >Home</NavLink>
            <NavLink to="/characters" exact="true" >Characters</NavLink>
            <NavLink to="/locations" exact="true" >Locations</NavLink>
            <NavLink to="/episodes" exact="true" >Episodes</NavLink>
        </section>
    )
}

export default NavBar;