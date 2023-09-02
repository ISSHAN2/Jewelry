import '././../App.css';
import Nav from'./Navigation';
import CarouselComponent from './Carousel';
import HomeImg from './homeimg';
import Store from './store';
import Him from './him';
import Her from './herfr';
import New from './newarrivals';
import Subji from './subscribe';
import Footer from './footer';
import React from 'react';

const Home = () => {
  return (
    <div className="App">
      <HomeImg/>
      <Nav/>
      <Nav/>
      <div className='popo'></div>
      <CarouselComponent/>
      <Store/>
      <div className='popo'></div>
      <New/>
      <div className='popo'></div>
      <Him/>
      <div className='spopo'></div>
      <div className='parallax'></div>
      <Her/>
      <div className='subss'>
      <img className="end"src='images/smexy.jpg'/>
      <Subji/>
      </div>
      <Footer/>
      
      
    </div>
  );
  
}

export default Home;
