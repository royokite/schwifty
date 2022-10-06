import React, { useEffect, useState } from "react";
import EachCharacter from "./EachCharacter";

function Characters() {
    const [characters, setCharacters] = useState([])
    const [pageNo, setPageNo] = useState(1)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${pageNo}`)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [pageNo])

    const renderCharacters = characters.map(char => 
        <EachCharacter 
            key={char.id} 
            name={char.name} 
            status={char.status}
            species={char.species}
            gender={char.gender}
            image={char.image}
            origin={char.origin.name}
        />)
        
    return (
        <section>
            <article className="grid gap-8 grid-cols-4 m-6">
                {renderCharacters}
            </article>
            <article className="grid grid-cols-4 gap-0 justify-center m-6">
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
                    disabled={pageNo === 42 ? true : false }
                >Next Page
                </button>
            </article>
        </section>
    )
}

export default Characters;