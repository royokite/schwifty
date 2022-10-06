import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="bg-gray-800  mt-0 sticky w-full z-10 top-0 flex flex-wrap">
            <article  className="flex-none">
                <img id="logo" src="logo.png" alt="page logo" style={{width: '8rem', height: '8rem'}} />  
            </article>
            <article className="mt-5 flex-auto">
                <h1 className="text-5xl text-center font-bold underline text-lime-400/100">Rick and Morty</h1><br /> 
            </article>
            
            <article  className="mt-5 flex-none">
                <NavLink to="/" exact="true" className="bg-lime-500 m-2 p-2 rounded-md">Home</NavLink>
                <NavLink to="/characters" exact="true" className="bg-lime-500 m-2 p-2 rounded-md">Characters</NavLink>
                <NavLink to="/locations" exact="true" className="bg-lime-500 m-2 p-2 rounded-md">Locations</NavLink>
                <NavLink to="/episodes" exact="true" className="bg-lime-500 m-2 p-2 rounded-md">Episodes</NavLink>
            </article>
        </nav>
    )
}

export default NavBar;