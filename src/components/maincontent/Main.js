import React from 'react';
import Gallery from './Gallery';
import Specials from './Specials';
import CarouselComponent from "./CarouselComponent";


const Main = (props) => {
    return (
        <div>
            <CarouselComponent />
            <Specials />
            <Gallery />
        </div>
    )
}

export default Main; 