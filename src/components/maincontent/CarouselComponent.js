


///////////////////////////////////////////////////

           import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


 

const items = [
  {
    src: '/pictures/BaxtersTreeLamp169Slate.jpg',
    altText: 'Slide 1',
    caption: 'Check out that lamp!',
    header: 'Baxters Lamp',
    key: '1'
  },
  {
    src: '/pictures/MaryAndSusie169.jpg',
    altText: 'Slide 2',
    caption: 'Happy birthday, Mary!',
    header: 'Marys Party',
    key: '2'
  },
  {
    src: 'pictures/katiesPics/BaxtersFrontPainted169.jpg',
    altText: 'Slide 3',
    caption: 'It looks painted now!',
    header: 'Baxters, our location',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;






function CarouselComponent(props){
return(
  <div id='mainCarousel' className='row'>
              <div className='col-12 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 '>
              <Example />
              </div>
              </div>
)
}
export default CarouselComponent;