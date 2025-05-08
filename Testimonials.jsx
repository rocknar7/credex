import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      role: "CEO",
      company: "TechCorp",
      review: "SoftSell helped us maximize the value of our unused licenses quickly!",
    },
    {
      name: "Jane Smith",
      role: "Manager",
      company: "SoftWareHouse",
      review: "Amazing platform! Got my payout in less than 24 hours.",
    },
  ];

  return (
    <div className="bg-secondary p-5 rounded mb-4 text-white">
      <h2 className="h4 mb-4">Customer Testimonials</h2>
      <div className="row">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card bg-light">
              <div className="card-body">
                <p className="card-title font-weight-bold">
                  {review.name}, {review.role} at {review.company}
                </p>
                <p className="card-text">"{review.review}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
