import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mb-5 border-top">
        <h1 className="mt-5 text-center">People</h1>
      </div>
      <div className="row p-3 text-muted fs-6">
        <div className="col-6 p-8 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nithin Kamath"
          />

          <h4 className="mt-5">Nitin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <hr></hr>
             He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC). 
            <hr></hr>
            Playing basketball is
            his zen. 
            <hr></hr>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
