import React from "react";
//import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>¿Te podemos ayudar?</h3>
        <Updates />
      </div>
    </div>
  );
};

export default RightSide;
