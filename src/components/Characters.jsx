import React, { useEffect, useState } from "react";
import EachCharacter from "./EachCharacter";

function Characters() {
    const [characters, setCharacters] = useState([])
    const [pageNo, setPageNo] = useState(2)
     
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    function handleClick(event) {
        if(pageNo<43 && pageNo>=1) {
            event.target.textContent === 'Next Page' ? setPageNo((pageNo) => pageNo + 1) : setPageNo((pageNo) => pageNo - 1)
    
            fetch(`https://rickandmortyapi.com/api/character?page=${pageNo}`)
                .then(response => response.json())
                .then(data => setCharacters(data.results))
        }
    }

    
    
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
        <section className="grid gap-8 grid-cols-4">
            {renderCharacters}
            <button onClick={handleClick}>Previous Page</button>
            <button onClick={handleClick}>Next Page</button>
        </section>
    )
}

export default Characters;