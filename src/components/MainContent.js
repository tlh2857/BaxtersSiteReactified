import React from 'react';
import CarouselComponent from "./maincontent/CarouselComponent";
import Banner from './maincontent/Banner';
import Gallery from './maincontent/Gallery';
import Navbar from './maincontent/Navbar';
import Specials from './maincontent/Specials';
export default MainContent; 
function MainContent(props){
    return(
        <div>
            <Banner />
            <Navbar />
            <CarouselComponent />
            <Specials />
            <Gallery />
        </div>
    )
}
