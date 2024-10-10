import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaShare } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'हिन्दी' },
];

const Navbar = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const email = 'example@example.com';
  const phone = '+91 1234567890';

  const socialMediaLinks = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    whatsapp: 'https://wa.me/+911234567890',
    share: 'https://example.com/share',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-nav">
          <div className="nav-item dropdown">
            <select 
              className="form-select bg-dark text-white border-0"
              value={language} 
              onChange={handleLanguageChange}
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
          <a className="nav-link d-flex align-items-center" href={`mailto:${email}`}>
            <MdEmail size={24} color="#fff" />
            <span className="ms-2">{email}</span>
          </a>
          <a className="nav-link d-flex align-items-center" href={`tel:${phone}`}>
            <MdPhone size={24} color="#fff" />
            <span className="ms-2">{phone}</span>
          </a>
        </div>
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className="text-primary" />
          </a>
          <a className="nav-link" href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="text-danger" />
          </a>
          <a className="nav-link" href={socialMediaLinks.whatsapp} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} className="text-success" />
          </a>
          <a className="nav-link" href={socialMediaLinks.share} target="_blank" rel="noopener noreferrer">
            <FaShare size={24} className="text-info" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
