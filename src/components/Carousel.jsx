import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TaglineComponent from './tagline';

const CarouselComponent = () => {


  


  return (
    <div className="carousel-tagline-container">
  <div className={`carousel-container`}
 >
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
   // Pause auto-play while hovering
      interval={2500} // Set the interval in milliseconds
      stopOnHover={true}
      showIndicators={false}
      showArrows={true}
   // Disable swipe while hovering
    >
      <div>
        <img src="images/ring.jpg"  alt="Slide 1" className='carousel-image' />
      </div>
      <div>
        <img src="images/necklace.jpg" alt="Slide 2" className='carousel-image'/>
      </div>
      <div>
        <img src="images/bracelet.jpg" alt="Slide 3" className='carousel-image'/>
      </div>
      {/* Add more slides as needed */}
    </Carousel>
   
    </div>
    <TaglineComponent/>
    </div>
 
  );
};
export default CarouselComponent;



