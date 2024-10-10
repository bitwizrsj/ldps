import React from 'react';
import bgFooter from '/src/assets/images/bgfooter1.png';
import { FaFacebook, FaInstagram, FaWhatsapp, FaShare } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = 'example@example.com';
  const phone = '+91 1234567890';

  const socialMediaLinks = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    whatsapp: 'https://wa.me/+911234567890',
    share: 'https://example.com/share',
  };

  return (
    <footer className="footer bg-dark text-white py-5">
      <img src={bgFooter} alt="pattern-lines" className="bg-pattern" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h6 className="font-weight-bold text-uppercase mb-4">Soft</h6>
            <NavLinks />
          </div>
          <div className="col-lg-6 text-lg-end text-center">
            <ContactInfo email={email} phone={phone} />
            <SocialMedia links={socialMediaLinks} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="text-sm opacity-8 mb-0">
              &copy; {currentYear} Soft by Creative Tim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const NavLinks = () => (
  <div className="row">
    <div className="col-6">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white opacity-8 hover-underline" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white opacity-8 hover-underline" href="/about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white opacity-8 hover-underline" href="/calendar">Calendar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white opacity-8 hover-underline" href="/admissions">Admissions</a>
        </li>
      </ul>
    </div>
    <div className="col-6">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white opacity-8 hover-underline" href="/map-branch1">Branch 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white opacity-8 hover-underline" href="/map-branch2">Branch 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white opacity-8 hover-underline" href="/academics-primary">Primary</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white opacity-8 hover-underline" href="/academics-secondary">Secondary</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white opacity-8 hover-underline" href="/academics-senior-secondary">Senior Secondary</a>
        </li>
      </ul>
    </div>
  </div>
);

const ContactInfo = ({ email, phone }) => (
  <div className="contact-info mb-4">
    <a href={`mailto:${email}`} className="text-white d-block mb-2">
      <MdEmail size={24} className="me-2" />
      {email}
    </a>
    <a href={`tel:${phone}`} className="text-white d-block mb-4">
      <MdPhone size={24} className="me-2" />
      {phone}
    </a>
  </div>
);

const SocialMedia = ({ links }) => (
  <div className="social-media">
    <a href={links.facebook} className="text-white me-3" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={24} />
    </a>
    <a href={links.instagram} className="text-white me-3" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={24} />
    </a>
    <a href={links.whatsapp} className="text-white me-3" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={24} />
    </a>
    <a href={links.share} className="text-white" target="_blank" rel="noopener noreferrer">
      <FaShare size={24} />
    </a>
  </div>
);

export default Footer;
