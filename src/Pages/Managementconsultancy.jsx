import React from "react";
import linkimg1 from "../images/accounting1.png";
import linkimg2 from "../images/accounting2.png";


export const Managementconsultancy = () => {
  return (
    <>
      <div>
        <div className="cnt-hd-blk">
          <div className="container-fluid cnt-hd-img">
            <a className="cnt-hd-tlt">MANAGEMENT CONSULTANCY</a>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-3 side-bar">
            <h4>QUICK LINKS</h4>
            <ul className="qk-list">
              <li className="qk-list-li">
                <img className="link-img" src={linkimg1} alt="" /> MARKETING
                RESEARCH & CONSULTANCY
              </li>
              <li className="qk-list-li">
                <img className="link-img" src={linkimg2} alt="" /> MARKETING
                MANAGEMENT
              </li>
              <li className="qk-list-li">
                <img className="link-img" src={linkimg1} alt="" /> MANAGEMENT
                CONSULTANCY
              </li>
              <li className="qk-list-li">
                <img className="link-img" src={linkimg1} alt="" /> COMPLETE PRO
                SERVICES
              </li>
              <li className="qk-list-li">
                <img className="link-img" src={linkimg1} alt="" /> ACCOUNTING &
                BOOKKEEPING
              </li>
              <li className="qk-list-li">
                <img className="link-img" src={linkimg1} alt="" /> AUDITING
                SERVICES
              </li>
              <li className="qk-list-li">
                <img className="link-img" src={linkimg1} alt="" /> VAT
                CONSULTANCY SERVICES
              </li>
              <li className="qk-list-li">
                <img className="link-img" src={linkimg1} alt="" /> LIQUIDATION
                OF COMPANY
              </li>
            </ul>
          </div>
          <div className="col-md-9 sol-sub-body">
            <h4> BUSINESS MANAGEMENT CONSULTATION IN DUBAI</h4>
            <p></p>
            <h6> What is Bookkeeping and Accounting?</h6>
            <p>
              The role of management consultancy firms in dubai is to improve
              the performance. We have team of professionals who have excellent
              management skills and helped number of business to increase their
              performance graph. Implementation of new strategy and a different
              way to solve existing problems will help our professionals to
              manage business issues well.
            </p>
            <p>1 Company formation in UAE</p>
            <p>2 Liquidation of company</p>
            <p>3 Consultation services for setting up new businesses</p>
            <p>4 Managing bank loans </p>
            <p>5 Managing bank account opening</p>
            <p>6 Implementation of sales process</p>
            <p>7 Managing local sponsors</p>
            <p>8 Soft collection of debts</p>
            <p>9 Training need analysis</p>
            <p>10 Web presence for a new company</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Managementconsultancy;
