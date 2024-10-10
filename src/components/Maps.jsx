import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCopy, faMapMarkedAlt);

export default function Maps() {
  const [activeTab, setActiveTab] = useState('branch1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Address copied to clipboard');
  };

  const branches = {
    branch1: {
      address: 'New York, NY 10012, USA',
      phone: '+01 234 567 89',
      email: 'contact@gmail.com',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
    },
    branch2: {
      address: 'Los Angeles, CA 90001, USA',
      phone: '+01 987 654 32',
      email: 'contact.la@gmail.com',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402954677887!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a5b8a6e0d%3A0x5eeb5b2327e3e3e3!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1624523937953!5m2!1sen!2sin'
    }
  };

  return (
    <section className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="container">
        <h3 className="mb-5 text-center">School Addresses</h3>

        <div className="row">
          <div className="col-lg-4 mx-auto">
            <div className="nav-wrapper position-relative end-0">
              
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-5 d-flex flex-column">
          <ul className="nav nav-pills nav-fill p-5" role="tablist">
                <li className="nav-item">
                  <a
                    className={`nav-link mb-0 px-0 py-1 ${activeTab === 'branch1' ? 'active' : ''}`}
                    data-bs-toggle="tab"
                    href="#branch1"
                    role="tab"
                    aria-controls="branch1"
                    aria-selected={activeTab === 'branch1'}
                    onClick={() => handleTabClick('branch1')}
                  >
                    Branch 1
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link mb-0 px-0 py-1 ${activeTab === 'branch2' ? 'active' : ''}`}
                    data-bs-toggle="tab"
                    href="#branch2"
                    role="tab"
                    aria-controls="branch2"
                    aria-selected={activeTab === 'branch2'}
                    onClick={() => handleTabClick('branch2')}
                  >
                    Branch 2
                  </a>
                </li>
              </ul>
            <div className="text-left mb-3">
              <p>
                <strong>Address:</strong><br />
                {branches[activeTab].address}
              </p>
              <p>
                <strong>Phone:</strong><br />
                {branches[activeTab].phone}
              </p>
              <p>
                <strong>Email:</strong><br />
                {branches[activeTab].email}
              </p>
            </div>
            <div className="mb-4">
              <button 
                className="btn btn-outline-primary m-2"
                onClick={() => copyToClipboard(branches[activeTab].address)}
                title="Copy Address"
              >
                <FontAwesomeIcon icon={faCopy} size="lg" className="mr-2" /> Copy Address
              </button>
              <a 
                href={`https://www.google.com/maps?q=${encodeURIComponent(branches[activeTab].address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-secondary m-2"
                title="Go to Google Maps"
              >
                <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" className="mr-2" /> Go to Google Maps
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <iframe
              src={branches[activeTab].mapSrc}
              className="w-100"
              style={{ border: '0', height: '50vh' }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
