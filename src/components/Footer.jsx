import React, { useState } from "react";

function Footer() {
    const [fave, setFave] = useState("")
    return (
        <section className="bg-gray-800 grid grid-cols-2">
            <h2 className="text-lime-400/100 m-4">©Rokyt</h2>
            <article className="justify-right">
                <label htmlFor="favourite-character" className="text-lime-400/100">Favourite Character?</label>
                <input 
                    type="text" 
                    name="favourite-character" 
                    className="border-double border-4 border-lime-400 m-4 rounded-md"
                    value={fave} 
                    onChange={(e) => setFave(e.target.value)} />
            </article>
        </section>
    )

}

export default Footer;