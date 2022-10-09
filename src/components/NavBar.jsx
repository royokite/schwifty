import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    let activeStyle = {
        backgroundColor: "rgb(3 105 161)",
      };    
      
    return (
        <nav className="bg-gray-800  mt-0 mb-3 sticky w-full z-10 top-0 flex flex-wrap">
            <article  className="flex-none">
                <NavLink to="/"><img id="logo" src="./images/logo.png" alt="page logo" style={{width: '8rem', height: '8rem'}} /> </NavLink>  
            </article>
            <article className="mt-5 flex-auto">
                <h1 className="text-5xl text-center font-bold underline text-lime-400/100">Get Schwifty...</h1><br /> 
            </article>
            
            <article  className="mt-5 flex-none">
                <NavLink to="/" exact="true" end className="bg-lime-500 m-2 p-2 rounded-md hover:bg-sky-700" style={({ isActive }) => isActive ? activeStyle : undefined }>Home</NavLink>
                <NavLink to="/characters" exact="true" className="bg-lime-500 m-2 p-2 rounded-md hover:bg-sky-700" style={({ isActive }) => isActive ? activeStyle : undefined }>Characters</NavLink>
                <NavLink to="/locations" exact="true" className="bg-lime-500 m-2 p-2 rounded-md hover:bg-sky-700" style={({ isActive }) => isActive ? activeStyle : undefined }>Locations</NavLink>
                <NavLink to="/episodes" exact="true" className="bg-lime-500 m-2 p-2 rounded-md hover:bg-sky-700" style={({ isActive }) => isActive ? activeStyle : undefined }>Episodes</NavLink>
            </article>
        </nav>
    )
}

export default NavBar;