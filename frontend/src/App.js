import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FlipBox from './Components/Home/Card'
import CustomNavbar from './Components/Navbar';
import Home from './Components/Home';
import Product from './Components/Home/Product';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/About';
import Pi from './Components/ProductInfo';
import Error from './Components/404';

const App = () => {

  return (
    <>
      <CustomNavbar />
      <Router>
          <Routes>
            <Route path='/ida-ltd-3.0' element={<Home />} />
            <Route path='*' element={<Error />} />
            <Route path='/ida-ltd-3.0/flip' element={<FlipBox />} />
            <Route path='/ida-ltd-3.0/products' element={<Product />} />
            <Route path='/ida-ltd-3.0/contact' element={<ContactUs />} />
            <Route path='/ida-ltd-3.0/about' element={<AboutUs />} />
            <Route path='/ida-ltd-3.0/pi' element={<Pi />} />
          </Routes>
      </Router>
      <Footer />
    </>
  );
};


export default App;