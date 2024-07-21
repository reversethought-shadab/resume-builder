import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const Pricing = () => {
  const [modal, setModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const toggle = () => setModal(!modal);

  const handleButtonClick = (plan) => {
    setSelectedPlan(plan);
    toggle();
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formattedValue);
  };
  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 4);
    
    if (value.length >= 2) {
      const month = parseInt(value.slice(0, 2), 10);
      if (month > 12) {
        setExpiryDateError('Please enter a valid month');
      } else {
        setExpiryDateError('');
      }
    }

    if (value.length === 4) {
      const year = parseInt(value.slice(2, 4), 10);
        if (year < 0 || year > 99) {
        setExpiryDateError('Please enter a valid year');
      } else {

        setExpiryDateError('');
      }
    }

    const formattedValue = value.replace(/(\d{2})(?=\d)/g, '$1/');
    setExpiryDate(formattedValue);
  };
  const handleSecurityCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setSecurityCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };
  const plans = [
    {
      title: 'Basic',
      price: '$ 5.00',
      duration: '/ 7 Days',
      description: '7-Day Trial Subscription',
      features: [
        'Unlimited PDF Downloads',
        'Unlimited Resumes',
        'Unlimited Cover Letters',
        'After 7 days, auto-renews to ₹2,089 billed every 4',
        'Non-recurring payment. Pay once',
        'Cancel any time',
        '7-day money back guarantee*',
        'Free resume critique from an HR expert',
      ],
      buttonText: 'Get Started',
      recommended: true,
    },
    {
      title: 'Monthly',
      price: '$ 19.00',
      duration: '/ 30 Days',
      description: 'Monthly Subscription',
      features: [
        'Unlimited PDF Downloads',
        'Unlimited Resumes',
        'Unlimited Cover Letters',
        'After 7 days, auto-renews to ₹2,089 billed every 4',
        'Non-recurring payment. Pay once',
        'Cancel any time',
        '7-day money back guarantee*',
        'Free resume critique from an HR expert',
      ],
      buttonText: 'Get Started',
    },
    {
      title: '6 Months',
      price: '$ 110.00',
      duration: '/ 180 Days',
      description: '6 Month Subscription',
      features: [
        'Unlimited PDF Downloads',
        'Unlimited Resumes',
        'Unlimited Cover Letters',
        'After 7 days, auto-renews to ₹2,089 billed every 4',
        'Non-recurring payment. Pay once',
        'Cancel any time',
        '7-day money back guarantee*',
        'Free resume critique from an HR expert',
      ],
      buttonText: 'Get Started',
    },
  
  ];

  return (
   <section className="pricing-card-section">
    <div className="container">
      <div className="row">
      {plans.map((plan, index) => (
            <div className="col-lg-4" key={index}>
              <Card className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                <CardBody>
                  <CardHeader>
                    <CardTitle tag="h5">{plan.title}</CardTitle>
                    {plan.recommended && <div className="recommended-badge">Recommended</div>}
                  </CardHeader>
                       <div className="price-floating">
                       <CardText className="price">{plan.price}</CardText>
                       <CardText className="duration">{plan.duration}</CardText>
                       </div>
                  <CardText className="description">{plan.description}</CardText>
                  <ul className="features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </CardBody>
                <Button className='rounded-btn floating-btn' onClick={() => handleButtonClick(plan)}>{plan.buttonText}</Button>
              </Card>
            </div>
          ))}
      </div>
    </div>
    <Modal isOpen={modal} toggle={toggle} className="custom-modal">
        <ModalHeader toggle={toggle}>Activate Your Subscription</ModalHeader>
        <ModalBody>
          <div className="modal-header-content">
            <p>Premium Account: <br /> {selectedPlan?.title}</p>
            <p>Total Including Tax: <br /> {selectedPlan?.price}</p>
          </div>
          <div className="payment-methods">
            <Button className="payment-method">
            <i className="fa-brands fa-paypal payment-icon"></i>
              PayPal
            </Button>
            <Button className="payment-method selected">
            <i className="fa-solid fa-credit-card payment-icon"></i>
              Credit Card
            </Button>
            <Button className="payment-method">
            <i className="fa-brands fa-google-pay payment-icon"></i>
              Google Pay
            </Button>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="cardNumber">Card Number</Label>
              <Input
                type="text"
                name="cardNumber"
                id="cardNumber"
                placeholder="1234 5678 8765 4321"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength="19"
              />
            </FormGroup>
            <div className="form-row">
              <FormGroup className="form-group-half">
                <Label for="expiryDate">Expiry Date</Label>
                <div className="custom-input-wrapper">
                  <Input
                    type="text"
                    name="expiryDate"
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    maxLength="5"
                  />
                  <i className="fa fa-calendar-alt input-icon" />
                </div>
                {expiryDateError && <p className="error-text text-danger my-1">{expiryDateError}</p>}
              </FormGroup>
              <FormGroup className="form-group-half">
                <Label for="securityCode">Security Code</Label>
                <div className="custom-input-wrapper">
                <Input
                  type="text"
                  name="securityCode"
                  id="securityCode"
                  placeholder="***"
                  value={securityCode}
                    onChange={handleSecurityCodeChange}
                    maxLength="4"
                  />
                  <i class="fa-solid fa-credit-card input-icon"></i>
                </div>
              </FormGroup>
            </div>
            <Button type="submit" color="primary" className="pay-now-btn">Pay Now</Button>
          </Form>
        </ModalBody>
      </Modal>
   </section>
  );
}

export default Pricing;