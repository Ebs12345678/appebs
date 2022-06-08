import React from "react";
import linkimg1 from "../images/accounting1.png";
import linkimg2 from "../images/accounting2.png";


export const Accountingbookkeeping = () => {
  return (
    <>
      <div>
        <div className="cnt-hd-blk">
          <div className="container-fluid cnt-hd-img">
            <a className="cnt-hd-tlt">ACCOUNTING & BOOKKEEPING</a>
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
            <h4> BOOKKEEPING AND ACCOUNTING FIRMS IN DUBAI</h4>
            <p></p>
            <h6> What is Bookkeeping and Accounting?</h6>
            <p>
              Bookkeeping is recording of all the financial transactions.
              Bookkeeping is a part of accounts in business. All financial
              transactions recorded by bookkeepers in Bookkeeping and Accounting
              firms in Dubai. They record all the business transactions on a
              daily basis.
            </p>
            <p>
              Financial transactions include purchase, sales & payments made by
              the company.
            </p>
            <h6>
              Typical financial transactions and tasks that bookkeeping
              includes:
            </h6>
            <p>1 Billing for goods sold or services provided to clients</p>
            <p>2 receipts from customers</p>
            <p>3 Verifying and recording invoices received from suppliers</p>
            <p>4 Paying suppliers </p>
            <p>
              5 Processing employees’ pay and the related governmental reports
            </p>
            <p>6 Monitoring individual accounts receivable</p>
            <p>7 Recording depreciation and other adjusting entries</p>
            <p>8 Providing financial report</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Accountingbookkeeping;
