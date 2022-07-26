/** @format */

import React from "react";

import "./searchResultItem.css";

const SearchResultItem = () => {
  return (
    <div className="searchResultItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="sriImg"
      />
      <div className="sriDesc">
        <h1 className="sriTitle">Tower Street Apartments</h1>
        <span className="sriDistance">500m from center</span>
        <span className="sriTaxiOp">Free airport taxi</span>
        <span className="sriSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="sriFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="sriCancelOp">Free cancellation </span>
        <span className="sriCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="sriDetails">
        <div className="sriRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="sriDetailTexts">
          <span className="sriPrice">$112</span>
          <span className="sriTaxOp">Includes taxes and fees</span>
          <button className="sriCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
