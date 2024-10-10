import React from 'react';
import './ShieldShape.css';
import pf from '/src/assets/images/pf.jpg';

const ShieldShape = () => {
  return (
    <div className="shield-container">
      <img src={pf} alt="Profile" className="profile-image" />
    </div>
  );
};

export default ShieldShape;
