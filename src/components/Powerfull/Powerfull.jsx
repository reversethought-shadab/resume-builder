import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Powerfull = () => {
  return (
    <div className="powerfull">
      <Container fluid>
       
        <Row className='align-items-center'>
          <Col xs="12" md="6">
            <div className="powerfull-content">
            <h2 className="custom-heading">What Makes Werkfeed Powerful?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p><p> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </Col>
          <Col xs="12" md="6">
            <div className="list-container">
              <ul className="custom-list">
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
              </ul>
              <ul className="custom-list">
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Powerfull;