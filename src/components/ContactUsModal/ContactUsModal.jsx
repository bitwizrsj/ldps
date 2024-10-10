import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUsModal.css';
import * as yup from 'yup';
import { Formik, Field, Form } from 'formik';

const ContactUsModal = ({ open, closeModal }) => {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    message: yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: 'bitwizrsj@gmail.com',
      message: values.message,
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (open && !event.target.closest('.modal-content')) {
            closeModal();
          }
        };
    
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
          };
        }, [open, closeModal]);
    



    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    ).then(
      (response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitting(false);
        setName('');
        setEmail('');
        setMessage('');
        closeModal(); // Close the modal after successful submission
      },
      (error) => {
        console.log('Error sending email:', error);
        setSubmitting(false);
      }
    );
  };


  

  return (
    <div className="modal" style={{ display: open ? "block" : "none" }}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Contact Us</h2>
          <button className="modal-close-btn" onClick={closeModal}>&times;</button>
        </div>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="modal-form">
              <label htmlFor="name-contact">Name:</label>
              <Field name="name" type="text" id="name-contact" required />
              <label htmlFor="email-contact">Email:</label>
              <Field name="email" type="email" id="email-contact" required />
              <label htmlFor="message">Message:</label>
              <Field name="message" component="textarea" id="message" required></Field>
              <button type="submit" disabled={isSubmitting}>
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUsModal;