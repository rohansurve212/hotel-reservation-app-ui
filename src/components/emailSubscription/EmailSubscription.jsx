/** @format */

import React from "react";

import "./emailSubscription.css";

const EmailSubscription = () => {
  return (
    <div className="emailSub">
      <h1 className="emailSubTitle">Save time, save money!</h1>
      <span className="emailSubDescription">
        Sign up and we'll send the best deals to you
      </span>
      <div className="emailSubInputContainer">
        <input type="text" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default EmailSubscription;
