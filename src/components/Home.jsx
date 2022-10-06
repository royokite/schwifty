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
                <span className="text-lime-400/100 text-2xl underline">Synopsis</span> <br /> <br />
                <p className="text-justify text-xl bg-lime-400 italic text-black rounded-md p-4"> 
                    After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with 
                    her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion.
                    Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab,
                    Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does
                    that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.
                </p>
            </article> <br />
            <article>
                <CarouselContainer />   
            </article>
        </section>
    )
}

export default Home;