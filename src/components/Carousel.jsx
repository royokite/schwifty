import React from "react";
import Carousel from 'better-react-carousel'

function CarouselContainer() {
    return (
        <Carousel 
            cols={3} 
            rows={1} 
            gap={10} 
            loop="true" 
            showDots="true" 
            autoplay={2000} 
            dotColorActive="rgb(132 204 22)" 
            dotColorInactive="rgb(0 0 0)"
        >
            <Carousel.Item>
                <img src="/images/bg5.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg2.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg6.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg7.png" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg9.png" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg10.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg11.png" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg12.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg13.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg14.png" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg15.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg3.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg4.jpg" alt="carousel item" style={{height: "80%", width: "100%"}}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/images/bg8.jpg" alt="carousel item" style={{height: "80%", width: "100%"}} />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;
