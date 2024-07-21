import React from 'react'

import Header from '../components/Header/Header'
import Builder from '../components/Builder/Builder'
import Powerfull from '../components/Powerfull/Powerfull'
import HowWeWork from '../components/How/HowWeWork'
import Pricing from '../components/Pricing/Pricing'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <Builder />
      <Powerfull />
      <HowWeWork/>
      <Pricing/>
      <Footer isGeneral={false}/>
    </div>
  )
}

export default Home
