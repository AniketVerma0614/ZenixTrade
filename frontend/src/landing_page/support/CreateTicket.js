import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h4 className="fs-2 text-center">
          To create a ticket, select a relevant topic
        </h4>
      </div>

      <div className="row">
        {/* First row with 3 columns */}
        <div className="col-md-4 p-3">
          <h4 className="fs-4">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="#">Offline Account Opening</a><br />
          <a href="#">Company, Partnership and HUF Account Opening</a><br />
          <a href="#">Online Account Opening</a><br />
          <a href="#">NRI Account Opening</a><br />
          <a href="#">Charges at Zerodha</a><br />
          <a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a><br />
          <a href="#">Getting Started</a><br />
        </div>

        <div className="col-md-4 p-3">
          <h4 className="fs-4">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Trading & Investments
          </h4>
          <a href="#">Equity Trading</a><br />
          <a href="#">Commodity & Currency Trading</a><br />
          <a href="#">Mutual Funds</a><br />
          <a href="#">Bonds & IPOs</a><br />
          <a href="#">Corporate Actions</a><br />
        </div>

        <div className="col-md-4 p-3">
          <h4 className="fs-4">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Technical Support
          </h4>
          <a href="#">Platform Issues</a><br />
          <a href="#">Login Problems</a><br />
          <a href="#">Order Execution</a><br />
          <a href="#">Charting Tools</a><br />
          <a href="#">API Support</a><br />
        </div>
      </div>

      <div className="row">
        {/* Second row with 3 columns */}
        <div className="col-md-4 p-3">
          <h4 className="fs-4">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Payment & Withdrawal
          </h4>
          <a href="#">Deposit Funds</a><br />
          <a href="#">Withdrawal Process</a><br />
          <a href="#">Bank Account Linking</a><br />
        </div>

        <div className="col-md-4 p-3">
          <h4 className="fs-4">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Management
          </h4>
          <a href="#">Change Mobile Number</a><br />
          <a href="#">Update Email ID</a><br />
          <a href="#">Deactivate Account</a><br />
        </div>

        <div className="col-md-4 p-3">
          <h4 className="fs-4">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Regulatory Compliance
          </h4>
          <a href="#">KYC Guidelines</a><br />
          <a href="#">Taxation Policies</a><br />
          <a href="#">Risk Management</a><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

