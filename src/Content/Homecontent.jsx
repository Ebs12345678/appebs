import React from 'react';
import img2 from '../images/Finacial-and-Corporate-Services.jpg';
import img3 from '../images/Digital-Marketing.jpg';
import { Link } from 'react-router-dom';
import Homecontentdata from './Homecontentdata';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

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
                            <level>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.
                            </level>
                            <div className='fnc-cor-hm-blk'>
                                <ul className='fnr-cor-ul-cls'>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>ESR</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Company Formation</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>License Renewal</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Liquidation</li>
                                </ul>

                                <ul className='fnr-cor-ul-cls-blk2'>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>ICV</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Company Formation</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Company Formation</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Company Formation</li>
                                </ul>

                            </div>
                            {/* <level>
                                {Homecontentdata.fincorpsol}
                            </level> */}
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

                        <level>
                        A good representation of the business helps it grow easily. 
                        Develop your e-Commerce site with Elevate…
                            </level>
                            <div className='fnc-cor-hm-blk'>
                                <ul className='fnr-cor-ul-cls'>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Website Designing</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Website Development</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>E-Commerce Development</li>
                                    
                                </ul>

                                <ul className='fnr-cor-ul-cls-blk2'>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Anroid App Development</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>iOS App Development</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Automation</li>
                                    
                                </ul>

                            </div>

                            {/* <level>
                                {Homecontentdata.webdev}
                            </level> */}
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
                        <level>
                        We connect your business to potential customers with the right 
                        Digital Marketing tools. Promote the business… 
                            </level>
                            <div className='fnc-cor-hm-blk'>
                                <ul className='fnr-cor-ul-cls'>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>SEO</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Google Ads</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>E-Commerce Marketing</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Google Merchant Center</li>
                                </ul>

                                <ul className='fnr-cor-ul-cls-blk2'>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Facebook & Instagram Marketing</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Amazon Store Optimization</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>eBay Store Optimization</li>
                                    <li className='fnr-cor-li-cls'><span className='fnc-cor-hm-arw-icn'><HiOutlineArrowNarrowRight/></span>Lead Generation</li>
                                </ul>

                            </div>
 

                            {/* <level>
                                {Homecontentdata.dm}
                            </level> */}
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
