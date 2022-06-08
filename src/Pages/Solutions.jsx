import React from "react";
import cardimg1 from '../images/about-us.png';

const Solutions = () => {
  return (
    <>
      <div>
        <div className="cnt-hd-blk">
          <div className="container-fluid cnt-hd-img">
            <a className="cnt-hd-tlt">Solutions</a>
          </div>
        </div>
      </div>
      <div className="sec-sol-1">
        <div className="container">
            <div className="row">
            <div className="col-md-3">
                <div className="card-sol">
                        <div className="card-inner">
                            <img className="card-img" src={cardimg1} alt="" />
                            <h5>MARKETING RESEARCH & CONSULTANCY</h5>
                            <p> We are great advisors to help you research the market trends and have strategies to help you launch your products to the market.</p>
                            <div className="btn btn-danger ml-auto navbtn solbtn">Read more..</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card-sol">
                        <div className="card-inner">
                            <img className="card-img" src={cardimg1} alt="" />
                            <h5>MARKETING MANAGEMENT</h5>
                            <p>Marketing is the heart of the business success. How well you’re managing your marketing umbrella matters</p>
                            <div className="btn btn-danger ml-auto navbtn solbtn">Read more..</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card-sol">
                        <div className="card-inner">
                            <img className="card-img" src={cardimg1} alt="" />
                            <h5>MANAGEMENT CONSULTANCY</h5>
                            <p>The role of management consultancy is to improve the performance and we have team of professionals</p>
                            <div className="btn btn-danger ml-auto navbtn solbtn">Read more..</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card-sol">
                        <div className="card-inner">
                            <img className="card-img" src={cardimg1} alt="" />
                            <h5>COMPLETE PRO SERVICES</h5>
                            <p>DUBAI, a dream place for businessmen and establishing a business in DUBAI is not an easy process until and unless you are not aware</p>
                            <div className="btn btn-danger ml-auto navbtn solbtn">Read more..</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-3">
                <div className="card-sol">
                        <div className="card-inner">
                          <div className="sol-img-blk">

                          <img className="card-img" src={cardimg1} alt="" />
                          </div>
                            
                            <h5>ACCOUNTING & BOOKKEEPING</h5>
                            <p>We are offering services that are well developed by the skilled and experienced team of Accounting managers.</p>
                            <div className="btn btn-danger ml-auto navbtn solbtn">Read more..</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card-sol">
                        <div className="card-inner">
                            <img className="card-img" src={cardimg1} alt="" />
                            <h5>AUDITING SERVICES</h5>
                            <p>Investing in an Auditing Services is always be a best for a business and innovative auditing services benefits your business. Advancement in technologies brings the number</p>
                            <div className="btn btn-danger ml-auto navbtn solbtn">Read more..</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card-sol">
                        <div className="card-inner">
                            <img className="card-img" src={cardimg1} alt="" />
                            <h5>VAT CONSULTANCY SERVICES</h5>
                            <p>VAT (Value added tax) is a tax that imposed on taxable business owners on the import and also on the supply of Goods and Services</p>
                            <div className="btn btn-danger ml-auto navbtn solbtn">Read more..</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card-sol">
                        <div className="card-inner">
                            <img className="card-img" src={cardimg1} alt="" />
                            <h5>LIQUIDATION OF COMPANY</h5>
                            <p>We provide liquidation services for all entities – Mainland companies, Free zone companies especially in DMCC and TECOM, etc.</p>
                            <div className="btn btn-danger ml-auto navbtn solbtn">Read more..</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
