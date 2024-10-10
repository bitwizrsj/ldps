// ApplyNowModal.js
import React, { useState } from 'react';
import axios from 'axios';

const ApplyNowModal = ({ open, closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('resume', resume);

    try {
      const response = await axios.post(
        'http://localhost:3001/api/send-email',
        formData
      );
      setStatus(response.data.success);
    } catch (error) {
      setStatus(error.response.data.error);
    }
  };

  return (
    <div className="modal" style={{ display: open ? "block" : "none" }}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Apply Now</h2>
          <button className="modal-close-btn" onClick={closeModal}>&times;</button>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
        <label htmlFor="name-apply">Name:</label>
              <input type="text" id="name-apply" value={name} onChange={(e) => setName(e.target.value)} required />
              <label htmlFor="email-apply">Email:</label>
              <input type="email" id="email-apply" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="resume">Upload Resume:</label>
              <input type="file" id="resume" onChange={(e) => setResume(e.target.files[0])} required />
          {status && <p>{status}</p>}
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowModal;