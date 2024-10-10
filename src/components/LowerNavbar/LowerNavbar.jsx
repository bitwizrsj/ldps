import React, { useState } from 'react';
import './LowerNavbar.css';
import emailjs from 'emailjs-com';
import ContactUsModal from '../ContactUsModal/ContactUsModal';
import ApplyNowModal from '../ApplyNowModal/ApplyNowModal';
import useModal from '../../hooks/useModal';

const LowerNavbar = () => {
  const [contactUsModalOpen, setContactUsModalOpen, closeContactUsModal] = useModal(false);
  const [applyNowModalOpen, setApplyNowModalOpen, closeApplyNowModal] = useModal(false);
 
 
  const handleContactUsClick = () => {
    console.log("Contact Us button clicked");
    setContactUsModalOpen(true);
  };
  
  const handleApplyNowClick = () => {
    console.log("Apply Now button clicked");
    setApplyNowModalOpen(true);
  };


  return (
    <nav className="navbar2">
      <div className="left-side">
        <a href="/" className="logo">
          <img src="logo.png" alt="School Logo" />
        </a>
      </div>
      <div className="right-side">
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <div className="dropdown">
          <a className="dropdown-btn">Calendar</a>
          <div className="dropdown-content">
            <a href="/calendar-branch1">Branch 1</a>
            <a href="/calendar-branch2">Branch 2</a>
          </div>
        </div>
        <div className="dropdown">
          <a className="dropdown-btn">Maps</a>
          <div className="dropdown-content">
            <a href="/map-branch1">Branch 1</a>
            <a href="/map-branch2">Branch 2</a>
          </div>
        </div>
        <div className="dropdown">
          <a className="dropdown-btn">Academics</a>
          <div className="dropdown-content">
            <a href="/academics-primary">Primary</a>
            <a href="/academics-secondary">Secondary</a>
            <a href="/academics-senior-secondary">Senior Secondary</a>
          </div>
        </div>
        <a href="/other-link1">Other Link 1</a>
        <a href="/other-link2">Other Link 2</a>
        
        <button className="contact-us-btn" onClick={handleContactUsClick}>
          Contact Us
        </button>
        <button className="apply-now-btn" onClick={handleApplyNowClick}>
          Apply Now
        </button>
      </div>

      {contactUsModalOpen && (
        <ContactUsModal open={contactUsModalOpen} closeModal={closeContactUsModal} />
      )}
      {applyNowModalOpen && (
        <ApplyNowModal open={applyNowModalOpen} closeModal={closeApplyNowModal} />
      )}
    </nav>
  );
};

export default LowerNavbar;
