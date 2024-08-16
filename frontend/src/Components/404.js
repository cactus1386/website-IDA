import React from "react";
import pic from "../Assets/404.png";
import "../CSS/General.css";
import "../CSS/404.css";

const fourOfour = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-12 pt-2">
        <div className="bg-blue rounded bgs">
          <div className="d-flex justify-content-center">
            <img src={pic} class="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default fourOfour;
