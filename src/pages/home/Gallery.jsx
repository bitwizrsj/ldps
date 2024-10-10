import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css'; 
import cd from '../../assets/images/Gallary.jpg';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
  return (
    <header>
      <h1 className="mt-5 text-center font-weight-bold">School Gallery</h1>
      <div className="page-header min-vh-80">
        <div className="container">
          <div className="header-content row">
            <div className="col-lg-4 my-auto">
              <h1 className="mb-4 font-weight-bolder">Memorable Moments</h1>
              <p className="lead">
                Explore the unforgettable moments captured in our school gallery. Witness the joy, creativity, and achievements of our students.
                </p>
                <Button variant="primary">See More Photos</Button>
            </div>
            <div className="col-lg-6 ps-lg-5 pe-0">
              <div className="row mt-3">
                <div className="col-lg-3 col-6">
                  <img
                    className="w-100 border-radius-lg shadow mt-0 mt-lg-7"
                    src='src\assets\images\Gallary\Gallary (1).jpg'
                    alt="gallery-1"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-3 col-6">
                  <img
                    className="w-100 border-radius-lg shadow"
                    src='src\assets\images\Gallary\Gallary (2).jpg'
                    alt="gallery-2"
                    loading="lazy"
                  />
                  <img
                    className="w-100 border-radius-lg shadow mt-4"
                    src='src\assets\images\Gallary\Gallary (3).jpg'
                    alt="gallery-3"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-3 col-6 mb-3">
                  <img
                    className="w-100 border-radius-lg shadow mt-0 mt-lg-5"
                    src='src\assets\images\Gallary\Gallary (4).jpg'
                    alt="gallery-4"
                    loading="lazy"
                  />
                  <img
                    className="w-100 border-radius-lg shadow mt-4"
                    src='src\assets\images\Gallary\Gallary (5).jpg'
                    alt="gallery-5"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-3 col-6">
                  <img
                    className="w-100 border-radius-lg shadow mt-3"
                    src='src\assets\images\Gallary\Gallary (6).jpg'
                    alt="gallery-6"
                    loading="lazy"
                  />
                  <img
                    className="w-100 border-radius-lg shadow mt-4"
                    src='src\assets\images\Gallary\Gallary (7).jpg'
                    alt="gallery-7"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Gallery;
