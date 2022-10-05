import React from "react";

function EachCharacter({ name, status, species, gender, image }) {
    return (
        <article>
            <img src={image} alt="character appearance"/>
            <h2>{name}</h2>
            <p>Status: {status} Species: {species} Gender: {gender}</p>
        </article>
    )
}

export default EachCharacter;