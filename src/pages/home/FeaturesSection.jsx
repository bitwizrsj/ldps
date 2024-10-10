import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSchool, faHandshake, faClock } from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  return (
    <section className="py-9 mt-5 d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
      <div className="container">
        <h2 className="text-center mb-5">ABOUT US</h2>
        <div className="row">
          <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
            <div className="bg-light shadow-sm p-4">
              <div className="p-3 info-horizontal d-flex align-items-start">
                <div className="icon icon-shape bg-gradient-primary shadow-primary text-center me-3">
                  <FontAwesomeIcon icon={faSchool} className="opacity-10" />
                </div>
                <div className="description">
                  <p className="mb-0">
                    We provide a well-rounded education that prepares students for future success. <br /> Our dedicated teachers inspire a love of learning.
                  </p>
                </div>
              </div>
              <div className="p-3 info-horizontal d-flex align-items-start">
                <div className="icon icon-shape bg-gradient-primary shadow-primary text-center me-3">
                  <FontAwesomeIcon icon={faHandshake} className="opacity-10" />
                </div>
                <div className="description">
                  <p className="mb-0">
                    We foster a community of respect and collaboration. <br /> Students learn the value of teamwork and mutual support.
                  </p>
                </div>
              </div>
              <div className="p-3 info-horizontal d-flex align-items-start">
                <div className="icon icon-shape bg-gradient-primary shadow-primary text-center me-3">
                  <FontAwesomeIcon icon={faClock} className="opacity-10" />
                </div>
                <div className="description">
                  <p className="mb-0">
                    Our extracurricular programs enrich students' educational experience. <br /> Time management and diverse interests are encouraged.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-auto">
            <h3>Learn More About Our School</h3>
            <p className="pe-5">
              Our school is dedicated to providing a nurturing and challenging environment for students to grow and excel. We believe in the potential of every child and strive to foster a love for learning.
            </p>
            <a href="javascript:;" className="text-primary icon-move-right">
              More about us
              <FontAwesomeIcon icon={faArrowRight} className="text-sm ms-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
