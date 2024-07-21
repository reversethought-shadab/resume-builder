import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import CV1 from '../../images/cv22.png'
import CV2 from '../../images/c11.png'
import CV3 from '../../images/c3.png'

const HowWeWork = () => {

 


  return (
    <div className="how-we-work-section">
      <Container>
        <Row>
        <Col md="6" className="slide-container">
        <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
      >
        <SwiperSlide><img src={CV1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={CV2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={CV3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={CV1} alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img src={CV2} alt="Slide 5" /></SwiperSlide>
        <SwiperSlide><img src={CV3} alt="Slide 6" /></SwiperSlide>
        <SwiperSlide><img src={CV1} alt="Slide 7" /></SwiperSlide>
        <SwiperSlide><img src={CV2} alt="Slide 8" /></SwiperSlide>
        <SwiperSlide><img src={CV3} alt="Slide 9" /></SwiperSlide>
      </Swiper>
          </Col>
       
          <Col md="6" className="text-container">
            <h2>How We Work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Button className='custom-btn'>View More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HowWeWork;