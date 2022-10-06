import React, { useState, useEffect } from "react";
import EachLocation from "./EachLocation";

function Locations() {
    const [locations, setLocations] = useState([])
    const [pageNo, setPageNo] = useState(2)

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
            .then(response => response.json())
            .then(data => setLocations(data.results))
    }, [])

    const renderLocations = locations.map(loc => 
        <EachLocation 
            key={loc.id} 
            name={loc.name} 
            type={loc.type} 
            dimension={loc.dimension}
        />)

    function handleClick(event) {
        if(pageNo<8 && pageNo>=1) {
            event.target.textContent === 'Next Page' ? setPageNo((pageNo) => pageNo + 1) : setPageNo((pageNo) => pageNo - 1)
    
            fetch(`https://rickandmortyapi.com/api/location?page=${pageNo}`)
                .then(response => response.json())
                .then(data => setLocations(data.results))
        }
    }

    return (
        <section>
            <h1>Universe Known Locations</h1>
            {renderLocations}
            <button onClick={handleClick}>Previous Page</button>
            <button onClick={handleClick}>Next Page</button>
        </section>

    )
}

export default Locations;