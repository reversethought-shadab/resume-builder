import React from 'react';
import FirstTemp from '../components/Resume/FirstTemp';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import SideForm from '../components/Resume/SideForm';

const Customize = () => {

  return (
          <div>
              <Navbar/>
        <section className="customize">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <SideForm/>
              </div>
              <div className="col-lg-7">
                <FirstTemp/>
              </div>
            </div>
          </div>
        </section>
        <FirstTemp/>
        <Footer isGeneral={true} />
      </div>
  )
}

export default Customize;