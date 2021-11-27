import React, { Component } from "react";
import "./QuotePage.css";

const QuotePage = () => {
  return (
    <div className="Quote">
      <h1>How would you like to receive this quote?</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>By Phone</h1>
            <p>867-5309</p>
          </div>
          <div className="col">
            <h1>By Email</h1>
            <p>Please send us an Email Here:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
