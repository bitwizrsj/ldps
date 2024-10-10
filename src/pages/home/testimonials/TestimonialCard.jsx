import React from 'react';

const TestimonialCard = ({ image, name, date, text, rating, isPrimary }) => {
  const cardClass = isPrimary ? 'bg-gradient-primary' : 'card-plain';
  const textClass = isPrimary ? 'text-white' : '';
  const starStyle = { fontSize: '20px', color: isPrimary ? 'white' : 'grey' };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa-star ${index < rating ? 'fas' : 'far'}`}
      style={starStyle}
    ></i>
  ));

  return (
    <div className={`col-lg-4 col-md-6 mb-4`}>
      <div className={`card ${cardClass}`} style={{ border: 'none', padding: '20px' }}>
        <div className="card-body">
          <div className="author d-flex align-items-center">
            <img
              src={image}
              alt="avatar"
              className="avatar shadow"
              style={{
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <div className="name ps-2">
              <span className={`${textClass} fw-bold`}>{name}</span>
              <div className="stats">
                <small className={textClass}>{date}</small>
              </div>
            </div>
          </div>
          <p className={`mt-4 ${textClass}`}>{text}</p>
          <div className="rating mt-3">
            {stars}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
