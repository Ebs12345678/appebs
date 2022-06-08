import React from "react";
import Slider from '../Slider';
import {Homecontent} from '../Content/Homecontent'
import Body from '../Body';
import Ourservices from '../Ourservices'
import { HomeElevatebs } from "../Content/HomeElevatebs";
import { Boxservices } from "../Box Service/Boxservices";


const Home = () => {
  return (
    <>
      <div className='hero-slider'>
        <Slider />
      </div>
      <div className="boxservices">
        <Boxservices/>
      </div>
      <div className="container">
      <HomeElevatebs/>
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