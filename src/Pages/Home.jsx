import React from "react";
import Slider from '../Slider';
import Card from '../Card';
import Body from '../Body';
import Ourservices from '../Ourservices'



const Home = () => {
  return (
    <>
      <div className='hero-slider'>
        <Slider />
      </div>
      <div className="main-card">
        
      <Card />
      </div>

      <Body/>
      <div className="ourservicescls">
        <Ourservices/>
      </div>
    </>
  );
};

export default Home;