import React, { useState, useEffect } from "react";
import EachLocation from "./EachLocation";

function Locations() {
    const [locations, setLocations] = useState([])
    const [pageNo, setPageNo] = useState(1)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location?page=${pageNo}`)
            .then(response => response.json())
            .then(data => setLocations(data.results))
    }, [pageNo])

    const renderLocations = locations.map(loc => 
        <EachLocation 
            key={loc.id} 
            name={loc.name} 
            type={loc.type} 
            dimension={loc.dimension}
        />)

    return (
        <section className="m-10">
            <h1 className="text-lime-400/100 text-3xl text-center font-bold  border-gray-800 bg-gray-800 py-3">Universe Known Locations</h1> <br />
            <article className="grid gap-x-8 gap-y-4 grid-cols-2">
                {renderLocations}
            </article> <br />
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
                    disabled={pageNo === 7 ? true : false }
                >Next Page
                </button>
            </article>

        </section>

    )
}

export default Locations;