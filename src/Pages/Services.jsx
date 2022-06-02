import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            <div class="timeline">
                                <Link to="/" class="timeline-content">
                                    <div class="timeline-icon"><i class="fa fa-globe"></i></div>
                                    <div class="timeline-year">2021</div>
                                    <h3 class="title">Web Designing</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                                    </p>
                                </Link>
                            </div>
                            <div class="timeline">
                                <Link to="/" class="timeline-content">
                                    <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                                    <div class="timeline-year">2020</div>
                                    <h3 class="title">Web Development</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Services;