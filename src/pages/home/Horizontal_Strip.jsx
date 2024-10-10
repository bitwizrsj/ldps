import React from 'react';
import styled from 'styled-components';

const Strip = styled.div`
  background: linear-gradient(to right, #FFC499, #FFA07A);
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  font-family: 'Pacifico', cursive; /* Fancy font */
`;

const HorizontalStrip = () => {
  return (
    <Strip>
      <span style={{ fontFamily: 'cursive' }}>Discipline</span>
      <span style={{ fontFamily: 'cursive' }}>Respect</span>
      <span style={{ fontFamily: 'cursive' }}>Responsibility</span>
      <span style={{ fontFamily: 'cursive' }}>Teamwork</span>
    </Strip>
  );
};

export default HorizontalStrip;
