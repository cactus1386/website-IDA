import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FlipBox from './Components/Home/Card'
import CustomNavbar from './Components/Navbar';
import Home from './Components/Home';
import Product from './Components/Home/Product';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';

const App = () => {

  return (
    <>
      <CustomNavbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flip' element={<FlipBox />} />
          <Route path='/products' element={<Product />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};


export default App;