import React, { useState } from 'react';
import TestimonialHeader from './TestimonialHeader';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestimonialCard from './TestimonialCard';
import AddTestimonialModal from './AddTestimonialModal'; // Ensure this path is correct
import pf from '/src/assets/images/pf.jpg';
import './Testimonials.css'; // Import the custom CSS file

const Testimonials = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="py-5">
      <div className="container">
        <TestimonialHeader />
        <div className="row mt-6">
          <Carousel controls={true} indicators={true}>
            <Carousel.Item>
              <div className="row">
                <TestimonialCard
                  image={pf}
                  name="Mathew Glock"
                  date={<><i className="far fa-clock"></i> 5 min read</>}
                  text='"If you have the opportunity to play this game of life you need to appreciate every moment."'
                  rating={4}
                  isPrimary={false}
                />
                <TestimonialCard
                  image={pf}
                  name="Mathew Glock"
                  date="Posted on 28 February"
                  text='"If you have the opportunity to play this game of life you need to appreciate every moment."'
                  rating={3}
                  isPrimary={true}
                />
                <TestimonialCard
                  image={pf}
                  name="Mathew Glock"
                  date={<><i className="far fa-clock"></i> 5 min read</>}
                  text='"If you have the opportunity to play this game of life you need to appreciate every moment."'
                  rating={5}
                  isPrimary={false}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <TestimonialCard
                  image={pf}
                  name="Mathew Glock"
                  date={<><i className="far fa-clock"></i> 5 min read</>}
                  text='"If you have the opportunity to play this game of life you need to appreciate every moment."'
                  rating={4}
                  isPrimary={false}
                />
                <TestimonialCard
                  image={pf}
                  name="Mathew Glock"
                  date="Posted on 28 February"
                  text='"If you have the opportunity to play this game of life you need to appreciate every moment."'
                  rating={3}
                  isPrimary={true}
                />
                <TestimonialCard
                  image={pf}
                  name="Mathew Glock"
                  date={<><i className="far fa-clock"></i> 5 min read</>}
                  text='"If you have the opportunity to play this game of life you need to appreciate every moment."'
                  rating={5}
                  isPrimary={false}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <Button variant="primary" onClick={handleShow} className="mt-4">
          Add Your Testimonial
        </Button>

        <AddTestimonialModal show={show} handleClose={handleClose} />
        <hr className="horizontal dark my-5" />
      </div>
    </section>
  );
};

export default Testimonials;
