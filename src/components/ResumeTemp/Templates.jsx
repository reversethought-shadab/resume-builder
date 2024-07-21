import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Button, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import CV2 from '../../images/cv22.png';
import CV3 from '../../images/c3.png';


const templates = [
  {
    title: 'Aperture',
    image: CV3,
    description: 'Designed for optimal ATS readability\nRecruiter-approved design layout\nDownload in formats you need (pdf, docx, txt)',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Module',
    image: CV2,
    description: 'A modern design with a clean layout and bold typography.',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Aperture',
    image: CV3,
    description: 'Designed for optimal ATS readability\nRecruiter-approved design layout\nDownload in formats you need (pdf, docx, txt)',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Module',
    image: CV2,
    description: 'A modern design with a clean layout and bold typography.',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Aperture',
    image: CV3,
    description: 'Designed for optimal ATS readability\nRecruiter-approved design layout\nDownload in formats you need (pdf, docx, txt)',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Module',
    image: CV2,
    description: 'Designed for optimal ATS readability\nRecruiter-approved design layout\nDownload in formats you need (pdf, docx, txt)',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Aperture',
    image: CV3,
    description: 'Designed for optimal ATS readability\nRecruiter-approved design layout\nDownload in formats you need (pdf, docx, txt)',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Module',
    image: CV2,
    description: 'Designed for optimal ATS readability\nRecruiter-approved design layout\nDownload in formats you need (pdf, docx, txt)',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Aperture',
    image: CV3,
    description: 'Designed for optimal ATS readability\nRecruiter-approved design layout\nDownload in formats you need (pdf, docx, txt)',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Module',
    image: CV2,
    description: 'Designed for optimal ATS readability\nRecruiter-approved design layout\nDownload in formats you need (pdf, docx, txt)',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Aperture',
    image: CV3,
    description: 'Designed for optimal ATS readability\nRecruiter-approved design layout\nDownload in formats you need (pdf, docx, txt)',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },
  {
    title: 'Module',
    image: CV2,
    description: 'Designed for optimal ATS readability\nRecruiter-approved design layout\nDownload in formats you need (pdf, docx, txt)',
    features: [
      'Flex your style',
      'No more writer\'s block',
      'Unlimited ways to make an impression'
    ]
  },


];
const Templates = () => {
  const [modal, setModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();
  const toggle = (template) => {
    setSelectedTemplate(template);
    setModal(!modal);
  };
  return (
    <div>

      <Row>
        {templates.map((template, index) => (
          <Col md="3" key={index} className="template-col">
            <Card className="template-card border-0">
              <CardBody className='p-0'>

                <img src={template.image} alt={template.title} className="template-image" />
                <div className="template-buttons ">
                  <Button color="danger" className='btn-sm  rounded-pill' onClick={() => navigate('/customize')}>Use Template</Button>
                  <Button color="light" className='btn-sm rounded-pill' onClick={() => toggle(template)}>See Template</Button>
                </div>
                <CardTitle className='mx-3 template-title mb-0'>{template.title}</CardTitle>
                <p className='text-muted template-description mx-3 mb-0'>{template.description}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedTemplate && (
        <Modal isOpen={modal} toggle={toggle} className="template-modal" size="lg">
        <ModalHeader toggle={toggle}>{selectedTemplate.title}</ModalHeader>
        <ModalBody className="d-flex">
          <img src={selectedTemplate.image} alt={selectedTemplate.title} className="modal-image" />
          <div className="modal-content">
            <h2>{selectedTemplate.title}</h2>
            <div className="color-palette">
      <span style={{ backgroundColor: '#FF5A5F' }}></span>
      <span style={{ backgroundColor: '#FFB400' }}></span>
      <span style={{ backgroundColor: '#00D084' }}></span>
      <span style={{ backgroundColor: '#00A2FF' }}></span>
      <span style={{ backgroundColor: '#007AFF' }}></span>
      <span style={{ backgroundColor: '#9B51E0' }}></span>
      <span style={{ backgroundColor: '#BDBDBD' }}></span>
    </div>
            <p>{selectedTemplate.description}</p>
            <Button color="danger" className="use-template-button" onClick={() => navigate('/customize')}>Use Template</Button>
            <hr />
            {selectedTemplate.features && selectedTemplate.features.map((feature, index) => (
              <div key={index} className="feature">
                <h4>{feature}</h4>
                <p>Customize your template with easy-to-use design tools.</p>
              </div>
            ))}
          </div>
        </ModalBody>
      </Modal>
      )}
    </div>
  );
}

export default Templates;