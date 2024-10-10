import React, { useState } from 'react';
import './FAQSection.css'

const AccordionItem = ({ id, header, body, isExpanded, toggleExpand }) => (
  <div className="accordion-item mb-3">
    <h5 className="accordion-header" id={`heading${id}`}>
      <button
        className="accordion-button border-bottom font-weight-bold"
        type="button"
        onClick={() => toggleExpand(id)}
        aria-expanded={isExpanded}
        aria-controls={`collapse${id}`}
      >
        {header}
        <i className={`collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 ${isExpanded ? 'd-none' : ''}`}></i>
        <i className={`collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 ${isExpanded ? 'rotate' : ''}`}></i>
      </button>
    </h5>
    <div
      id={`collapse${id}`}
      className={`accordion-collapse collapse${isExpanded ? ' show' : ''}`}
      aria-labelledby={`heading${id}`}
      data-bs-parent="#accordionSchool"
    >
      <div className="accordion-body text-sm opacity-8">
        {body}
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const faqItems = [
    {
      id: 'One',
      header: 'What is the admission process?',
      body: 'To begin the admission process, please fill out the inquiry form on our website. Once submitted, our admissions team will contact you to schedule a tour and interview. We aim to make the process smooth and informative for all prospective families.'
    },
    {
      id: 'Two',
      header: 'What are the tuition fees?',
      body: 'Our tuition fees vary depending on the grade level of the student. Detailed information on our fees and payment plans can be found on our website or by contacting our admissions office directly. We also offer a variety of scholarships and financial aid options.'
    },
    {
      id: 'Three',
      header: 'What extracurricular activities are available?',
      body: 'We offer a wide range of extracurricular activities including sports, arts, music, drama, and various clubs. Our goal is to provide opportunities for students to explore their interests and develop new skills outside the classroom.'
    },
    {
      id: 'Four',
      header: 'How do I schedule a school tour?',
      body: 'To schedule a tour, please contact our admissions office or fill out the tour request form on our website. Tours are available throughout the year, and we encourage families to visit during school hours to see our community in action.'
    },
    {
      id: 'Five',
      header: 'What are the school’s hours and calendar?',
      body: 'Our school operates from 8:00 AM to 3:00 PM, Monday through Friday. The school calendar, including holidays and special events, is available on our website. We follow a standard academic year from September to June.'
    }
  ];

  return (
    <section className="py-4">
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 mx-auto text-center">
            <h2>Frequently Asked Questions</h2>
            <p>If you have any further questions, please don't hesitate to contact our admissions office. We are here to help you through the process.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="accordion" id="accordionSchool">
              {faqItems.map(item => (
                <AccordionItem
                  key={item.id}
                  id={item.id}
                  header={item.header}
                  body={item.body}
                  isExpanded={expandedItem === item.id}
                  toggleExpand={toggleExpand}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
