import React from "react";
import CarouselContainer from "./Carousel";

function Home() {
    return (
        <section className="m-5">
            <article>
                <h3 className="text-lime-400/100 text-3xl underline">Series Info</h3> <br />
                <p className="text-lg"><span className="text-lime-400/100">TV Networks: </span>Cartoon Network, Adult Swim</p>
                <p className="text-lg"><span className="text-lime-400/100">Premiere Date: </span>Dec 2, 2013</p>
                <p className="text-lg"><span className="text-lime-400/100">Genre: </span>Action</p>
                <p className="text-lg"><span className="text-lime-400/100">Executive producers:	</span>Dan Harmon, Justin Roiland</p>
            </article> <br />
            <article>
                <CarouselContainer />   
            </article> <br />
            <article> 
                <span className="text-lime-400/100 text-2xl underline">Synopsis</span> <br /> <br />
                <p className="text-justify text-xl bg-lime-400 italic text-black rounded-md p-4"> 
                    Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon 
                    Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Domestic Television. 
                    The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty
                    Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number
                    of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer. The general 
                    concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging
                    his grandson into high jinks.
                    
                    After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with 
                    her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion.
                    Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab,
                    Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does
                    that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.
                    
                    Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer, and Sarah Chalke voicing the rest of 
                    Rick and Morty's family. The series originated from an animated short parody film of Back to the Future created by 
                    Roiland for Channel 101, a short-film festival cofounded by Harmon. Since its debut, the series has received critical 
                    acclaim for its originality, creativity, and humor. They have been nominated for three Primetime Emmy Awards for 
                    Outstanding Animated Program and won the award in 2018 and 2020. They've also received two Annie Awards. The series has 
                    several times been the most viewed television comedy of adults. The popularity of Rick and Morty has made it a 
                    billion-dollar merchandising and media franchise.
                </p>
            </article>
        </section>
    )
}

export default Home;