import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./LowerNavbar.css";
import emailjs from "emailjs-com";
import ContactUsModal from "../ContactUsModal/ContactUsModal";
import ApplyNowModal from "../ApplyNowModal/ApplyNowModal";
import useModal from "../../hooks/useModal";
import { Button, ButtonGroup } from "react-bootstrap";

const Navs = () => {
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

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container position-sticky top-0" style={{ zIndex: 1050 }}>
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg blur border-radius-xl position-absolute my-3 top-0 border-bottom py-3 z-index-3 shadow start-0 end-0 mx-4">
            <div className="container">
              <a href="/" className="logo">
                <img src="logo.png" alt="School Logo" />
              </a>
              <button
                className="navbar-toggler shadow-none ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon mt-2">
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </span>
              </button>
              <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
                <ul className="navbar-nav navbar-nav-hover mx-auto">
                  <li className="nav-item mx-2">
                    <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                      Calendar
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                      Admissions
                    </a>
                  </li>
                  <li className="nav-item mx-2 dropdown">
                    <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center dropdown-toggle" role="button" id="mapsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                      Maps
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="mapsDropdown">
                      <li>
                        <a className="dropdown-item" href="/map-branch1">Branch 1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/map-branch2">Branch 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item mx-2 dropdown">
                    <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center dropdown-toggle" role="button" id="mapsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                      Academics
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="mapsDropdown">
                      <li>
                        <a className="dropdown-item" href="/map-branch1">Primary</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/map-branch2">Secondary</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/map-branch2">Senior Secondary</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ButtonGroup className="d-lg-block d-none">
                  <Button variant="dark" className="contact-us-btn" onClick={handleContactUsClick}>
                    Contact Us
                  </Button>
                  <Button variant="dark" className="apply-now-btn" onClick={handleApplyNowClick}>
                    Apply Now
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Modal components */}
      {contactUsModalOpen && (
        <ContactUsModal open={contactUsModalOpen} closeModal={closeContactUsModal} />
      )}
      {applyNowModalOpen && (
        <ApplyNowModal open={applyNowModalOpen} closeModal={closeApplyNowModal} />
      )}
    </div>
  );
};

export default Navs;
