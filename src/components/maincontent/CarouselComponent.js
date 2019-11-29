import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
export default CarouselComponent; 


function CarouselComponent(props){
return(
  <div id='mainCarousel' className='row'>
              <div className='col-12 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 '>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div  className="carousel-inner ">
                    <div className="carousel-item active">
                      <img className="img d-block w-100" src='/pictures/BaxtersTreeLamp169Slate.jpg' alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="img d-block w-100" src="/pictures/BaxtersBoutiqueTag43.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="img d-block w-100" src="/pictures/BaxtersTreeLamp169Slate.jpg" alt="Third slide" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
)
};