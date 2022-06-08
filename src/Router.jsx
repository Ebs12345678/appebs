import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './Style.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Solutions from './Pages/Solutions';
import Contact from './Pages/Contact';
import Notfound from './Notfound';
import Topheader from './Topheader';
import Footerf from './Footerf';
import WebDevelopment from './Pages/WebDevelopment'
import Liquidation from './Pages/Liquidation'
import Accountingbookkeeping from './Pages/Accountingbookkeeping'
import Auditingservices from './Pages/Auditingservices'
import CompletePRO from './Pages/CompletePRO'
import Managementconsultancy from './Pages/Managementconsultancy'
import Marketingmanagement from './Pages/Marketingmanagement'
import Marketingresearch from './Pages/Marketingresearch';
import Vatconsultancy from './Pages/Vatconsultancy';
export const Router = () => {
  return (
    <>
      <div className='top-header'>
        <Topheader/>
      </div>
      <div className='headerf'>
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/services/web-development" element={<WebDevelopment />} />
        <Route exact path="/solutions" element={<Solutions />} />
        <Route exact path="/solutions/liquidation" element={<Liquidation />} />
        <Route exact path="/solutions/accounting-bookkeeping" element={<Accountingbookkeeping />} />
        <Route exact path="/solutions/auditing-services" element={<Auditingservices />} />
        <Route exact path="/solutions/complete-pro" element={<CompletePRO />} />
        <Route exact path="/solutions/management-consultancy" element={<Managementconsultancy />} />
        <Route exact path="/solutions/Marketing-management" element={<Marketingmanagement />} />
        <Route exact path="/solutions/Marketing-research" element={<Marketingresearch />} />
        <Route exact path="/solutions/Vat-consultancy" element={<Vatconsultancy />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Notfound />} />
      </Routes>

      <Footerf/>

    </>
  );
};



