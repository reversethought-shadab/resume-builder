import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, FormGroup, Label, Input, Button } from 'reactstrap';
const colors = [
  '#FF5A5F', '#FFB400', '#FFD700', '#00D084', '#00B2CA',
  '#00A2FF', '#007BFF', '#A020F0', '#D3D3D3', '#6C757D'
];
const Filter = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Card
    className="filter-card"
    style={{
      position: isSticky ? 'sticky' : 'relative',
      top: isSticky ? 10 : 'auto',
      zIndex: 1000,
      transition: 'top 0.3s ease-in-out'
    }}
  >
      <CardBody>
        <CardTitle>Color</CardTitle>
        <div className="color-options">
        {colors.map((color, index) => (
            <div
              key={index}
              className="color-box"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <hr className='hr-custom'/>
        <div className="filter-section">
          <CardTitle>Filters</CardTitle>
          <Button color="link" className="clear-filters">Clear filters</Button>
        </div>
        <div className="filter-group">
          <h6>HEADSHOT</h6>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              With photo
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Without photo
            </Label>
          </FormGroup>
        </div>
        <div className="filter-group">
          <h6>COLUMNS</h6>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              1 column
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              2 columns
            </Label>
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  );
}

export default Filter;