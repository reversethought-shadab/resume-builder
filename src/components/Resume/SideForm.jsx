import React, { useState } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Container, 
  Row, 
  Col,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css'; 

const SideForm = () => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <Container className="side-form">
      <Row className="form-header">
      
      
      </Row>
      <Form className="details-form">
      <UncontrolledAccordion defaultOpen="1" className="custom-accordion">
        <AccordionItem open={open} toggle={toggle}>
          <AccordionHeader targetId="1">Personal Information</AccordionHeader>
          <AccordionBody accordionId="1">
          <Row className="photo-upload">
                <div className="photo-placeholder"></div>
                <Button className="upload-button"><i className="fa fa-upload" aria-hidden="true"></i> Upload Photo</Button>
              </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input type="text" name="firstName" id="firstName" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input type="text" name="lastName" id="lastName" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="headline">Headline</Label>
                  <Input type="text" name="headline" id="headline" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="phoneNumber">Phone Number</Label>
                  <Input type="tel" name="phoneNumber" id="phoneNumber" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="textarea" name="address" id="address" />
            </FormGroup>
            <FormGroup>
              <Label for="pincode">Pincode</Label>
              <Input type="text" name="pincode" id="pincode" />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" id="city" />
            </FormGroup>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Educational Details</AccordionHeader>
          <AccordionBody accordionId="2">
            <FormGroup>
                <Label for="education">Education</Label>
                <Input type="text" name="education" id="education" />
            </FormGroup>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="schoolName">School</Label>
                        <Input type="text" name="schoolName" id="schoolName" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <FormGroup>
                        <Label for="startMonth">Start Date</Label>
                        <Input type="select" name="startMonth" id="startMonth">
                            <option>Month</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="startYear" className="invisible">Year</Label>
                        <Input type="select" name="startYear" id="startYear">
                            <option>Year</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="endMonth">End Date</Label>
                        <Input type="select" name="endMonth" id="endMonth">
                            <option>Month</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="endYear" className="invisible">Year</Label>
                        <Input type="select" name="endYear" id="endYear">
                            <option>Year</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="present" id="present" />{' '}
                            Present
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" />
            </FormGroup>
        </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Employment</AccordionHeader>
          <AccordionBody accordionId="3">
            Employment form fields...
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Skills</AccordionHeader>
          <AccordionBody accordionId="4">
            Skills form fields...
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Languages</AccordionHeader>
          <AccordionBody accordionId="5">
            Languages form fields...
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">Hobbies</AccordionHeader>
          <AccordionBody accordionId="6">
            Hobbies form fields...
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
      </Form>
    </Container>
  );
};

export default SideForm;