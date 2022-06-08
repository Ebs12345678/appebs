import React from "react";
import linkimg1 from "../images/accounting1.png";
import linkimg2 from "../images/accounting2.png";

export const Vatconsultancy = () => {
  return (
    <>
      <div>
        <div className="cnt-hd-blk">
          <div className="container-fluid cnt-hd-img">
            <a className="cnt-hd-tlt">VAT CONSULTANCY SERVICES</a>
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
            <h4> VAT CONSULTANCY SERVICES IN UAE</h4>
            <p></p>
            <h6> What is VAT?</h6>
            <p>
              VAT (Value added tax) is a tax that imposed on taxable business
              owners on the import and also on the supply of Goods and Services
              at each stage of production or distribution, including the Deemed
              Supply.
            </p>
            <p>
              In some countries, it is Goods and service tax (GST). This tax is
              accessed incrementally. The amount of tax user pays depends upon
              the value of goods and services at each stage of production.
            </p>
            <p>
              Bookkeeping and accounting firms in Dubai at present need to
              follow the VAT rules and regulations as well auditing the books
              and records for the client account.
            </p>
            <h6>How VAT Works?</h6>
            <p>
              VAT is imposing at each point of sale till it sold to end
              customers. The VAT in UAE is a 5% rate for all goods and services.
              For any purchase tax paid on purchase is’Input Tax Credit’ or
              ‘input VAT’. And the VAT collected on sales knows as ‘Output VAT’.
              Input vat is adjusted with output vat so in nutshell the entire
              tax is paid by the consumer.
            </p>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th colspan="3" scope="col">
                    Purchase
                  </th>
                  <th colspan="3" scope="col">
                    sale
                  </th>
                  <th colspan="3" scope="col">
                    Vat
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>Cost</td>
                  <td>VAT 5%</td>
                  <td>Total</td>
                  <td>Selling Price</td>
                  <td>VAT 5%</td>
                  <td>Total</td>
                  <td>Input VAT</td>
                  <td>Output VAT</td>
                  <td>VAT Payable=Output VAT-InputVAT</td>
                </tr>
                <tr>
                  <th scope="row"> Supplier</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>500</td>
                  <td>25</td>
                  <td>525</td>
                  <td></td>
                  <td>25</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">Manufacturer</th>
                  <td>500</td>
                  <td>25</td>
                  <td>525</td>
                  <td>1000</td>
                  <td>50</td>
                  <td>1050</td>
                  <td>25</td>
                  <td>50</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">Distributor</th>
                  <td>1000</td>
                  <td>50</td>
                  <td>1050</td>
                  <td>1500</td>
                  <td>75</td>
                  <td>1575</td>
                  <td>50</td>
                  <td>75</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">Retailer</th>
                  <td>1500</td>
                  <td>75</td>
                  <td>1575</td>
                  <td>2000</td>
                  <td>100</td>
                  <td>2100</td>
                  <td>75</td>
                  <td>100</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">Consumer</th>
                  <td>2000</td>
                  <td>100</td>
                  <td>2100</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
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
export default Vatconsultancy;
