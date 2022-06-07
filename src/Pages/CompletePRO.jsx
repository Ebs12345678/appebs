import React from "react";
import linkimg1 from "../images/accounting1.png";
import linkimg2 from "../images/accounting2.png";


export const CompletePRO = () => {
  return (
    <>
      <div>
        <div className="cnt-hd-blk">
          <div className="container-fluid cnt-hd-img">
            <a className="cnt-hd-tlt">COMPLETE PRO SERVICES</a>
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
            <h4> COMPLETE PRO SERVICE IN DUBAI</h4>
            <p></p>

            <p>
              DUBAI, a dream place for businessmen and establishing a business
              in DUBAI is not an easy process until and unless you are not aware
              of the local requirements and government policies. So, we the
              complete Pro service in Dubai take care of the steps to enable
              cost effective business set up and keep your worries away from
              you.
            </p>
            <h6> Elevate Business Solutions Complete Pro Services In Dubai</h6>
            <p>1 Document Attestation Services by Auditor</p>
            <p>2 TRC(Tax Residency Services) from Ministry of Finance</p>
            <p>3 Industrial License</p>
            <p>4 License Renewal(DMCC, Main Land License & other Free Zone) </p>
            <p>5 Dubai Custom works/ Custom NOC Processing</p>
            <p>
              6 Dubai Economic Department(DED) works( Name Approval, Activity
              Changes into the license & Any Amendment to license)
            </p>
            <p>7 Managing local sponsors</p>
            <p>8 Dubai Municipality works</p>
            <p>9 Dubai Chamber works</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompletePRO;
