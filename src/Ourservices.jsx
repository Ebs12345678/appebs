import React from "react";
import { Link } from "react-router-dom";


const Ourservices = () => {
    return (
        <>
           <div className="ourservicesout">
                <h3 className="ourserviceshead"> Our Services</h3>
           <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            <div class="timeline">
                                <Link to="/" class="timeline-content">
                                    <div class="timeline-icon"><i class="fa fa-globe"></i></div>
                                    <div class="timeline-year">1</div>
                                    <h3 class="title">Website Development</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                                    </p>
                                </Link>
                            </div>
                            <div class="timeline">
                                <Link to="/" class="timeline-content">
                                    <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                                    <div class="timeline-year">2</div>
                                    <h3 class="title">Android/iOS App Development</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                                    </p>
                                </Link>
                            </div>

                            <div class="timeline">
                                <Link to="/" class="timeline-content">
                                    <div class="timeline-icon"><i class="fa fa-globe"></i></div>
                                    <div class="timeline-year">3</div>
                                    <h3 class="title">Digital Marketing</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                                    </p>
                                </Link>
                            </div>
                            <div class="timeline">
                                <Link to="/" class="timeline-content">
                                    <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                                    <div class="timeline-year">4</div>
                                    <h3 class="title">Amazon/eBay Product Optimization</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                                    </p>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

           </div>
           
            

        </>
    );
};

export default Ourservices;