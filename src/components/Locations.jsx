import React, { useState, useEffect } from "react";
import EachLocation from "./EachLocation";

function Locations() {
    const [locations, setLocations] = useState([])

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

    return (
        <section>
            <h1>Universe Known Locations</h1>
            {renderLocations}
        </section>

    )
}

export default Locations;