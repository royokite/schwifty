import React, { useState, useEffect } from "react";
import EachEpisode from "./EachEpisode";

function Episodes() {
    const [episodes, setEpisodes] = useState([])
    const [pageNo, setPageNo] = useState(2)

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

    function handleClick(event) {
        if(pageNo<4 && pageNo>=1) {
            event.target.textContent === 'Next Page' ? setPageNo((pageNo) => pageNo + 1) : setPageNo((pageNo) => pageNo - 1)
    
            fetch(`https://rickandmortyapi.com/api/episode?page=${pageNo}`)
                .then(response => response.json())
                .then(data => setEpisodes(data.results))
        }
    }

    return (
        <section className="m-10">
            <h1 className="text-lime-400/100 text-3xl text-center font-bold  border-gray-800 bg-gray-800 py-3 mb-3">Episode List</h1>
            <article className="grid gap-4 grid-cols-3">
                {renderEpisodes}
            </article>
            <button onClick={handleClick}>Previous Page</button>
            <button onClick={handleClick}>Next Page</button>
        </section>
    )
}

export default Episodes;