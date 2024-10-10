import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTestimonialModal = ({ show, handleClose }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (index) => {
    setRating(index + 1);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Your Testimonial</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formImage" className="mt-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter image URL" />
          </Form.Group>

          <Form.Group controlId="formDate" className="mt-3">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group controlId="formText" className="mt-3">
            <Form.Label>Testimonial</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="formRating" className="mt-3">
            <Form.Label>Rating</Form.Label>
            <div>
              {Array.from({ length: 5 }).map((_, index) => (
                <i
                  key={index}
                  className={`fa-star ${index < rating ? 'fas' : 'far'}`}
                  style={{ fontSize: '24px', color: '#ffc107', cursor: 'pointer' }}
                  onClick={() => handleRatingChange(index)}
                ></i>
              ))}
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTestimonialModal;
