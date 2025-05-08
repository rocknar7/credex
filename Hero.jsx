import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-primary text-white p-5 rounded mb-4">
      <h1 className="display-4 mb-2">Welcome to SoftSell</h1>
      <p className="lead mb-4">Sell your unused software licenses and get instant valuation!</p>
      <button className="btn btn-light text-primary">Get a Quote</button>
    </div>
  );
};

export default Hero;
