import React from 'react';
import Navbar from '../Header/Navbar';
import Templates from './Templates';
import Filter from './Filter';
import { Container, Row, Col } from 'reactstrap';


const ResumeTemplate = () => {
  return (
    <div>
      <Navbar />
      <section className='resume-template'>
        <div className='resume-template-header'>
        <h2 className='text-center'>Popular templates for 3 to 5 years of experience</h2>
        <p className='text-center'>You can always change your template later.</p>
        </div>
      <Container>
      <hr className='hr-custom '/>
        <Row>
          <Col md="3">
            <Filter />
          </Col>
          <Col md="9">
            <Templates />
          </Col>
        </Row>
      </Container>
      </section>
    </div>
  );
}

export default ResumeTemplate;