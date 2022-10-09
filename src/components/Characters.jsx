import React, { useEffect, useState } from "react";
import EachCharacter from "./EachCharacter";

function Characters() {
    const [characters, setCharacters] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${pageNo}`)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [pageNo])

    const searchItems = characters.filter(ch => ch.name.toLowerCase().includes(search))
    const renderCharacters = searchItems.map(char => 
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
            <input 
                type="text" 
                name="search-bar" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search Character Name..."
                className="border-double border-4 border-lime-400 m-6 rounded-md w-60 p-2"
            /> <br />
            <article className="grid gap-8 grid-cols-4 m-6">
                {renderCharacters}
            </article>
            <article className="grid grid-cols-4 gap-0 justify-center m-6">
                <button 
                    onClick={() => setPageNo((pageNo) => pageNo - 1)} 
                    className="bg-sky-700 m-2 p-2 rounded-md hover:bg-lime-500 col-start-1 disabled:opacity-0" 
                    style={{width: "100%"}}
                    disabled={pageNo === 1 ? true : false }
                > Previous Page
                    
                </button>
                <button 
                    onClick={() => setPageNo((pageNo) => pageNo + 1)} 
                    className="bg-sky-700 m-2 p-2 rounded-md hover:bg-lime-500 col-end-5 disabled:opacity-0" 
                    style={{width: "100%"}}
                    disabled={pageNo === 42 ? true : false }
                >Next Page
                </button>
            </article>
        </section>
    )
}

export default Characters;