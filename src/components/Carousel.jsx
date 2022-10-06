import React from "react";
import Carousel from 'better-react-carousel'

function CarouselContainer() {
    return (
        <Carousel cols={2} rows={1} gap={10} loop="true" showDots="true" autoplay>
            <Carousel.Item>
                <img width="100%" height="100%" src="bg2.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height="100%" src="bg3.jpg" alt="carousel item" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height="100%" src="bg4.jpg" alt="carousel item" />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;
