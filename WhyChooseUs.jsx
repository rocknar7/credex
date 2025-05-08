import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const WhyChooseUs = () => {
  const points = [
    { title: "Fast Payouts", description: "Receive payments quickly and securely." },
    { title: "Trusted Platform", description: "Thousands of satisfied customers." },
    { title: "Best Valuation", description: "Get the highest valuation for your license." },
    { title: "24/7 Support", description: "Our team is available anytime to assist you." },
  ];

  return (
    <div className="bg-info p-5 rounded mb-4 text-white">
      <h2 className="h4 mb-4">Why Choose Us</h2>
      <div className="row">
        {points.map((point, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">{point.title}</h5>
                <p className="card-text">{point.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
