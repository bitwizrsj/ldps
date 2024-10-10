import React from 'react';

const LogoSection = () => {
  const logos = [
    'logo-apple.svg',
    'logo-facebook.svg',
    'logo-behance.svg',
    'logo-spotify.svg',
    'logo-coinbase.svg',
    'logo-pinterest.svg'
  ];

  return (
    <div className="row">
      {logos.map((logo, index) => (
        <div key={index} className="col-lg-2 col-6">
          <img className="w-100 opacity-6" src={`../../assets/img/logos/gray-logos/${logo}`} alt="Logo" />
        </div>
      ))}
    </div>
  );
};

export default LogoSection;
