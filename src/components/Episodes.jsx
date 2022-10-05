import React, { useState, useEffect } from "react";
import EachEpisode from "./EachEpisode";

function Episodes() {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/episode")
            .then(response => response.json())
            .then(data => setEpisodes(data.results))
    }, [])

    const renderEpisodes = episodes.map(episode => 
        <EachEpisode 
            key={episode.id}
            name={episode.name}
            airDate={episode.air_date}
            episode={episode.episode}
        />)

    return (
        <section>
            <h1>Episode List</h1>
            {renderEpisodes}
        </section>
    )
}

export default Episodes;