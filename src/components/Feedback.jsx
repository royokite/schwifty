import React, { useState } from "react";

function Feedback() {
    const [ fName, setFName ] = useState("")
    const [ lName, setLName ] = useState("")
    const [ fave, setFave ] = useState("")
    const [ comment, setComment] = useState("")
    const [ constituency, setConstituency] = useState("")
    const [ county, setCounty ] = useState("")
    const [ postal, setPostal] = useState("")

    function HandleSubmit(event) {
        event.preventDefault()
        const submission = {fName, lName, fave, comment, constituency, county, postal}

        fetch("http://localhost:3001/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(submission)
        })

        setFName("")
        setLName("")
        setFave("")
        setComment("")
        setConstituency("")
        setCounty("")
        setPostal("")
    }

    return (
        <section className="flex justify-center">
            <form 
                className="w-full max-w-lg border-double border-4 border-lime-400 rounded-md m-6 p-6 bg-gray-800/100" 
                onSubmit={HandleSubmit}
            >
                <h2 className="text-3xl text-center font-bold text-lime-400/100 my-5">Feedback Form</h2>
                <article className="flex flex-wrap -mx-3 mb-6">
                    <article className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-sky-200 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >First Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder="First"
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                            required
                        />
                    </article>
                    <article className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-sky-200 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder="Last"
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                        />
                    </article>
                </article>
                <article className="flex flex-wrap -mx-3 mb-6">
                    <article className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-sky-200 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        > Favourite Character
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder="Fave..."
                            value={fave}
                            onChange={(e) => setFave(e.target.value)}
                            required
                        />
                        <p className="text-gray-600 text-xs italic">
                            Select wisely kin!
                        </p>
                    </article>
                    <article className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-sky-200 text-xs font-bold mb-2"
                            htmlFor="grid-comment"
                        > Comments
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder="Comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <p className="text-gray-600 text-xs italic">
                            To be glossed over.
                        </p>
                    </article>
                </article>
                <article className="flex flex-wrap -mx-3 mb-2">
                    <article className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-sky-200 text-xs font-bold mb-2"
                            htmlFor="grid-city"
                        > Constituency
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            placeholder="Starehe"
                            value={constituency}
                            onChange={(e) => setConstituency(e.target.value)}
                        />
                    </article>
                    <article className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-sky-200 text-xs font-bold mb-2"
                            htmlFor="grid-state"
                        > County
                        </label>
                        <article className="relative">
                            <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                            value={county}
                            onChange={(e) => setCounty(e.target.value)}
                            >
                            <option>Nairobi</option>
                            <option>Kisumu</option>
                            <option>Mombasa</option>
                            </select>
                            <article className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                            </article>
                        </article>
                    </article>
                    <article className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-sky-200 text-xs font-bold mb-2"
                            htmlFor="grid-zip"
                        > Postal Code
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="00100"
                            value={postal}
                            onChange={(e) => setPostal(e.target.value)}
                        /> 
                    </article>
                    <button 
                        className="bg-lime-500 m-2 p-2 rounded-md hover:bg-sky-700 col-end-5 mt-2 w-full text-slate-200"                      
                    >SUBMIT</button>
                </article>
            </form>
        </section>
    )
}

export default Feedback;