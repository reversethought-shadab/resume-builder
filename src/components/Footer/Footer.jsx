import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import GetStarted from './GetStarted';
import Logo from '../../images/werkfeed-logo.png'
const Footer = ({ isGeneral }) => {
  return (
    <div className={isGeneral ? "footer-general" : "footer"}>
    <GetStarted />
    <Container>
      <Row className='justify-content-between '>
        <Col md="4" className="footer-section">
          <div className="footer-logo">
            <img src={Logo} alt="Werkfeed Logo" />
          </div>
          <p>
            Werkfeed has helped 15 million job seekers. Our tools and Certified Professional Resume Writers guide you through the entire job search process.
          </p>
        </Col>
        <Col md="4" className="footer-section">
          <h5>Quick Links</h5>
          <ul className='list-unstyled'>
            <li ><Link className='text-white text-decoration-none' to="/about-us">About Us</Link></li>
            <li ><Link className='text-white text-decoration-none' to="/faq">FAQs</Link></li>
            <li ><Link className='text-white text-decoration-none' to="/contact-us">Contact</Link></li>
            <li ><Link className='text-white text-decoration-none' to="/press-coverage">Press Coverage</Link></li>
            <li ><Link className='text-white text-decoration-none' to="/customer-review">Customer Reviews</Link></li>
          </ul>
        </Col>
        <Col md="4" className="footer-section text-right">
          <h5>Contact Us</h5>
          <p>support@werkfeed.com</p>
          <p>contact@werkfeed.com</p>
          <h5>FOLLOW US</h5>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-snapchat-ghost"></i>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="footer-bottom text-center border-top py-3 bg-white">
      <p className='text-dark'> &copy; 2024 Werkfeed. All rights reserved.</p>
    </div>
  </div>
  );
};

export default Footer;