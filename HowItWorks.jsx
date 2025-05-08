import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const HowItWorks = () => {
  const steps = [
    { title: "Upload License", description: "Submit your software license details." },
    { title: "Get Valuation", description: "Receive a quick valuation for your license." },
    { title: "Get Paid", description: "Sell and receive payment instantly." },
  ];

  return (
    <div className="bg-light p-5 rounded mb-4">
      <h2 className="h4 mb-4">How It Works</h2>
      <div className="row">
        {steps.map((step, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{step.title}</h5>
                <p className="card-text">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
