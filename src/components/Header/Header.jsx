import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import CustomNavbar from './Navbar';
import '../../App.css';
// import HeroBottom from './HeroBottom';
import laptop from "../../images/lap.png"
const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    <div className='hero'>
    <CustomNavbar />
      <div className='hero-content'>
        <h1 className='hero-title'>Ready to land your next job. Join Werkfeed</h1>
        <p className='hero-subtitle'>Your resume says a lot about you, it determines whether your <br /> will be called in for an interview or not</p>
      </div>
      
    </div>
    {/* <HeroBottom /> */}
    <div className="hero-bottom">
        <Container>
          <Row className='position-relative'>
            <Col lg="4" className='color-sec' >
              <div className="hero-bottom-image d-flex justify-content-end ">
                <img src={laptop} alt="Hero Bottom" className='lappy-float' />
              </div>
            </Col>
            <Col lg="8">
              <div className="hero-bottom-cta">
                <div className="inner-hero">

                <h2>Recruiters Love Our Resume Builder. Learn Why Below.</h2>
                <p>P.S. The video is less than 2 minutes</p>
                <p>
                  Log into Werkfeed to create a standout and professional resume in minutes. A single repository keeping everything needed in one place to help you embark on your professional journey.
                </p>
                <Button color="danger" className="custom-btn play-btn" onClick={toggleModal}>Play Video</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={isModalOpen} size='lg' toggle={toggleModal} className="video-modal">
        <ModalHeader toggle={toggleModal}>Watch the Video</ModalHeader>
        <ModalBody>
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
      </div>
    </>
  );
}

export default Header;