import React from 'react';
import './ApplyNowButton.css'

const ApplyNowButton = ({ onClick }) => (
  <button className="apply-now-btn" onClick={onClick}>
    Apply Now
  </button>
);

export default ApplyNowButton;