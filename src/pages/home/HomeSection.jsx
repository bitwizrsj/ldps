import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; // Import Button from react-bootstrap
import ApplyNowModal from '../../components/ApplyNowModal/ApplyNowModal';
import { useState } from 'react';

const HomeSection = () => {
  const [applyNowModalOpen, setApplyNowModalOpen] = useState(false);

  const handleApplyNowClick = () => {
    console.log("Apply Now button clicked from HomeSection");
    setApplyNowModalOpen(true);
  };

  const closeApplyNowModal = () => {
    setApplyNowModalOpen(false);
  };

  return (
    <section className="home-section d-flex align-items-center justify-content-center" style={{backgroundColor: '#ffecec', height: 'calc(100vh - 55px)'}}>
      <div className="container">
        <div className="row">
          <div className="col text-start">
            <h1 className="display-3">Acme School</h1>
            <p className="lead">Empowering students to reach their full potential<br />through exceptional education.</p>
            <Button variant="primary" onClick={handleApplyNowClick}>Apply Now</Button>
          </div>
        </div>
      </div>

      {applyNowModalOpen && (
        <ApplyNowModal open={applyNowModalOpen} closeModal={closeApplyNowModal} />
      )}
    </section>
  );
};

export default HomeSection;
