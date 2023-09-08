// Card.js
import React from "react";
import "./Card.css";

const Card = ({ title, id, tag }) => (
  <div className="card">
    <div className="card-content">
      <p className="card-id">
        {id} <br />
      </p>
      <h4 className="card-title ">
        <b>
          {/* <span className="bullet-icon">•</span> */}
          {title}
        </b>
        <br />
      </h4>
      <div className="card-tag">
        <span>•</span> {tag}
      </div>
    </div>
  </div>
);

export default Card;
