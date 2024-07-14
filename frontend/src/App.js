import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FlipBox from './Components/Home/Card'
import CustomNavbar from './Components/Navbar';
import Home from './Components/Home';

const App = () => {

  return (
    <>
      <CustomNavbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flip' element={<FlipBox />} />
        </Routes>
      </Router>
    </>
  );
};


export default App;