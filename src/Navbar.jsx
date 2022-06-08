import React from "react";
import logo from './images/logo/logoebs.png';
import { Link } from 'react-router-dom'                                   

const Navbar = () => {
    return (
        <>
            
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <img src={logo} />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mlauto" >
                            <li className="nav-item active">
                                <Link className="nav-link"to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About us</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/services" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Services
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/services/web-development">Designing</Link>
                                    <Link className="dropdown-item" to="/">Accounting</Link>
                                    <Link className="dropdown-item" to="/">digital Marketing</Link>
                                    <Link className="dropdown-item" to="/">Development</Link>
                                </div>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/solutions">Solutions</Link>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/solutions" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/solutions/marketing-research">MARKETING RESEARCH & CONSULTANCY</Link>
                                    <Link className="dropdown-item" to="/solutions/marketing-management">MARKETING MANAGEMENT</Link>
                                    <Link className="dropdown-item" to="/solutions/management-consultancy">MANAGEMENT CONSULTANCY</Link>
                                    <Link className="dropdown-item" to="/solutions/complete-pro">COMPLETE PRO SERVICES</Link>
                                    <Link className="dropdown-item" to="/solutions/accounting-bookkeeping">ACCOUNTING & BOOKKEEPING</Link>
                                    <Link className="dropdown-item" to="/solutions/auditing-services">AUDITING SERVICES</Link>
                                    <Link className="dropdown-item" to="/solutions/vat-consultancy">VAT CONSULTANCY SERVICES</Link>
                                    <Link className="dropdown-item" to="/solutions/liquidation">LIQUIDATION OF COMPANY</Link>
                                </div>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                        </ul>
                        <div className="btn btn-danger ml-auto navbtn">GET QUOTE</div>
                    </div>
                </nav>


            </div>

        </>
    );
};

export default Navbar;