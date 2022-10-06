import React, { useState, useEffect } from "react";
import EachEpisode from "./EachEpisode";

function Episodes() {
    const [episodes, setEpisodes] = useState([])
    const [pageNo, setPageNo] = useState(1)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode?page=${pageNo}`)
            .then(response => response.json())
            .then(data => setEpisodes(data.results))
    }, [pageNo])

    const renderEpisodes = episodes.map(episode => 
        <EachEpisode 
            key={episode.id}
            name={episode.name}
            airDate={episode.air_date}
            episode={episode.episode}
        />)

    return (
        <section className="m-10">
            <h1 className="text-lime-400/100 text-3xl text-center font-bold  border-gray-800 bg-gray-800 py-3 mb-3">Episode List</h1>
            <article className="grid gap-4 grid-cols-3">
                {renderEpisodes}
            </article>
            <article className="grid grid-cols-4 gap-0 justify-center m-2">
                <button 
                    onClick={() => setPageNo((pageNo) => pageNo - 1)} 
                    className="bg-sky-700 m-2 p-2 rounded-md hover:bg-lime-500 col-start-1" 
                    style={{width: "100%"}}
                    disabled={pageNo === 1 ? true : false }
                >Previous Page
                </button>
                <button 
                    onClick={() => setPageNo((pageNo) => pageNo + 1)} 
                    className="bg-sky-700 m-2 p-2 rounded-md hover:bg-lime-500 col-end-5" 
                    style={{width: "100%"}}
                    disabled={pageNo === 3 ? true : false }
                >Next Page
                </button>
            </article>
        </section>
    )
}

export default Episodes;