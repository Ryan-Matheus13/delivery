import React from "react";

import "./Details.css";

const Details = ({ description }) => {
  return (
    <>
      <div className="details-container">
        <h2 className="details-title">Detalhes</h2>
        <p className="details-description">{description}</p>
      </div>
    </>
  );
};

export default Details;
