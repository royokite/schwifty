import React from "react";

function EachEpisode({ name, airDate, episode }) {
    return (
        <article className="border-double border-4 border-lime-400 bg-gray-800 rounded-lg p-2">
            <h2 className="text-lime-400/100 text-xl italic">{name}</h2>
            <p><span className="text-lime-400/100">Air Date: </span>{airDate}</p>
            <p><span className="text-lime-400/100">Episode: </span>{episode}</p>
        </article>
    )
}

export default EachEpisode;