import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Download from '../../images/download.svg'
import Create from '../../images/create.svg'
import Maintain from '../../images/maintain.svg'
import Secure from '../../images/secure.svg'
import Share from '../../images/second-secure.svg'
const Builder = () => {
  return (
    <div className="werkfeed">
    <Container  className="text-center my-5">
      <h2 className="mb-5 custom-heading">What Makes Werkfeed Powerful?</h2>
      <Row className="justify-content-center ">
        <Col xs="6" sm="4" md="2" className="feature">
          <img src={Create} alt="Create" className="feature-image" />
          <p>Create</p>
        </Col>
        <Col xs="6" sm="4" md="2" className="feature">
          <img src={Maintain} alt="Maintain" className="feature-image" />
          <p>Maintain</p>
        </Col>
        <Col xs="6" sm="4" md="2" className="feature">
          <img src={Secure} alt="Secure" className="feature-image" />
          <p>Secure</p>
        </Col>
        <Col xs="6" sm="4" md="2" className="feature">
          <img src={Share} alt="Share" className="feature-image" />
          <p>Share</p>
        </Col>
        <Col xs="6" sm="4" md="2" className="feature">
          <img src={Download} alt="Download" className="feature-image" />
          <p>Download</p>
        </Col>
      </Row>
      <a href="/builder" className="my-5 custom-btn  h-auto d-inline-block">Build Your CV</a>
    </Container>
    </div>
  );
}

export default Builder;