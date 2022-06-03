import React from 'react';
import img2 from '../images/Finacial-and-Corporate-Services.jpg';
import img3 from '../images/Digital-Marketing.jpg';
import { Link } from 'react-router-dom';

export const Homecontent = () => {
    return (
        <div className='container'>
            <div className='row fn-bsn-sec'>
                <div className='col-md-6 col-sm-6 col-lg-6 fn-cor-bg-img '>
                    <div className='lft-img'>
                        <img src={img2} />
                    </div>
                </div>
                <div className='col-md-6 col-sm-6 col-lg-6 fn-cor-bg-sec'>

                    <div className='lft-cnt'>
                        <h4 className='fn-cor-tlt'>Financial & Corporate Solutions</h4>
                        <p className='fn-cor-txt'>
                            <level>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.</level>
                        </p>
                    </div>

                    <div className="btncls">
                        <button className="btn btn-danger navbtn fcn-cor-btn">GET STARTED</button>

                    </div>
                    {/* <div className='fcn-btn'>
                        <Link className='btn btn-primary' to="/">GET STARTED</Link>
                    </div> */}
                </div>

                {/* 2nd Row Starts */}
                <div className='col-md-6 col-sm-6 col-lg-6 fn-cor-bg-sec'>

                    <div className='lft-cnt'>
                        <h4 className='fn-cor-tlt'>Website Development</h4>
                        <p className='fn-cor-txt'>
                            <level>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.</level>
                        </p>
                    </div>

                    <div className="btncls">
                        <button className="btn btn-danger navbtn fcn-cor-btn">GET STARTED</button>

                    </div>
                    {/* <div className='fcn-btn'>
                        <Link className='btn btn-primary' to="/">GET STARTED</Link>
                    </div> */}
                </div>

                <div className='col-md-6 col-sm-6 col-lg-6 fn-cor-bg-img '>
                    <div className='lft-img'>
                        <img src={img2} />
                    </div>
                </div>
                {/* 3rd Section */}
                <div className='col-md-6 col-sm-6 col-lg-6 fn-cor-bg-img '>
                    <div className='lft-img'>
                        <img src={img3} />
                    </div>
                </div>
                <div className='col-md-6 col-sm-6 col-lg-6 fn-cor-bg-sec'>

                    <div className='lft-cnt'>
                        <h4 className='fn-cor-tlt'>Digital Marketing</h4>
                        <p className='fn-cor-txt'>
                            <level>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.</level>
                        </p>
                    </div>

                    <div className="btncls">
                        <button className="btn btn-danger navbtn fcn-cor-btn">GET STARTED</button>

                    </div>
                    {/* <div className='fcn-btn'>
                        <Link className='btn btn-primary' to="/">GET STARTED</Link>
                    </div> */}
                </div>
            </div>
            
        </div>
    )
}
