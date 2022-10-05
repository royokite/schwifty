import React from "react";

function EachEpisode({ name, airDate, episode }) {
    return (
        <article>
            <h2>{name}</h2>
            <p>Air Date: {airDate}</p>
            <p>Episode: {episode}</p>
        </article>
    )
}

export default EachEpisode;