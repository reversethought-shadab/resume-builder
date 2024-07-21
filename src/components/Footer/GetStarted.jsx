import React from 'react';
import { useLocation } from 'react-router-dom';
import FooterCv from '../../images/footer.png';

const GetStarted = () => {
  const location = useLocation();

  if (location.pathname !== '/') {
    return null;
  }

  return (
    <div className="get-started container">
      <div className="get-started-content">
        <h2>Ready to get started?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        <button className="custom-btn bg-danger rounded-pill">Build Your CV</button>
      </div>
      <div className="get-started-image">
        <img src={FooterCv} alt="Get Started" />
      </div>
    </div>
  );
};

export default GetStarted;