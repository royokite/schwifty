import React from "react";

function EachLocation({ name, type, dimension }) {
    return (
        <article className="border-double border-4 border-lime-400 bg-gray-800 rounded-lg p-2">
            <h2 className="text-lime-400/100 text-xl italic">{name}</h2>
            <p><span className="text-lime-400/100">Type: </span>{type}</p>
            <p><span className="text-lime-400/100">Dimension: </span>{dimension}</p>
        </article>
    )
}

export default EachLocation;