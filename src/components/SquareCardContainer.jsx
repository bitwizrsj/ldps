import React from 'react';
import './SquareCardContainer.css';

const SquareCard = ({ color, tipText, secondText }) => {
  return (
    <div className={`card bg-${color} text-white text-center`} style={{ width: '200px', height: '200px', borderRadius: '10px', cursor: 'pointer', transition: '400ms' }}>
      <div className="card-body d-flex flex-column justify-content-center">
        <p className="card-text font-weight-bold">{tipText}</p>
        <p className="card-text">{secondText}</p>
      </div>
    </div>
  );
};

const SquareCardContainer = () => {
  return (
    <div className="card-container1">
      <SquareCard color="danger" tipText="Hover Me" secondText="Lorem Ipsum" />
      <SquareCard color="primary" tipText="Hover Me" secondText="Lorem Ipsum" />
      <SquareCard color="success" tipText="Hover Me" secondText="Lorem Ipsum" />
      <SquareCard color="danger" tipText="Hover Me" secondText="Lorem Ipsum" />
    </div>
  );
};

export default SquareCardContainer;
