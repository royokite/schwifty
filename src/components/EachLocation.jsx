import React from "react";

function EachLocation({ name, type, dimension }) {
    return (
        <article>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
        </article>
    )
}

export default EachLocation;