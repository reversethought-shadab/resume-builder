import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Faq from './Pages/Faq'
import PressCoverage from './Pages/PressCoverage'
import CustomerReview from './Pages/CustomerReview'
import Service from './Pages/Service'
import Blog from './Pages/Blog'
import Company from './Pages/Company'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Builder from './Pages/Builder'
import Home from './Pages/Home'
import Customize from './Pages/Customize'
import Work from './Pages/Work'
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/builder" element={<Builder />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/work" element={<Work />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/press-coverage" element={<PressCoverage />} />
      <Route path="/customer-review" element={<CustomerReview />} />
      <Route path="/service" element={<Service />} />
      <Route path="/" element={<Home />} exact />
      <Route path="/customize" element={<Customize />} />
    </Routes>
  </Router>
  )
}



export default App