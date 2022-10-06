import React from "react";

function EachCharacter({ name, status, species, gender, image, origin }) {
    return (
        <article className="border-double border-4 border-lime-400 bg-gray-800 rounded-lg p-2">
            <img src={image} alt="character appearance" style={{width: '100%'}}/>
            <h2 className="text-lime-400/100 text-2xl">{name}</h2>
            <p>
                <span className="text-lime-400/100">Status: </span> {status} <br />
                <span className="text-lime-400/100">Species: </span> {species} <br />
                <span className="text-lime-400/100">Gender: </span> {gender} <br />
                <span className="text-lime-400/100">Origin: </span> {origin} <br />
            </p>
        </article>
    )
}

export default EachCharacter;