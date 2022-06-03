import React from "react";
import Slider from '../Slider';
import {Homecontent} from '../Content/Homecontent'
import Body from '../Body';
import Ourservices from '../Ourservices'



const Home = () => {
  return (
    <>
      <div className='hero-slider'>
        <Slider />
      </div>
      <div className="main-card">
        
      <Homecontent />
      </div>

      <Body/>
      {/* <div className="ourservicescls">
        <Ourservices/>
      </div> */}
    </>
  );
};

export default Home;