import React, { useEffect, useState } from "react";
import EachCharacter from "./EachCharacter";

function Characters() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])
    
    const renderCharacters = characters.map(char => 
        <EachCharacter 
            key={char.id} 
            name={char.name} 
            status={char.status}
            species={char.species}
            gender={char.gender}
            image={char.image}
        />)
        
    return (
        <section>
            <h1>Character Details</h1>
            {renderCharacters}
        </section>
    )
}

export default Characters;