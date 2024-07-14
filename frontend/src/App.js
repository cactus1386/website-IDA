import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Product from './Components/Home/Product'
import CustomNavbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import FlipBox from './Components/Home/Card';

const App = () => {

  return (
    <>
      <CustomNavbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};


export default App;