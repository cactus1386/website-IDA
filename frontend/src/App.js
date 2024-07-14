import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Card from './Components/Home/Slider';
import FlipBox from './Components/Home/Card'
import CustomNavbar from './Components/Navbar';

const App = () => {

  return (
    <>
      <CustomNavbar />
      <Router>
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/flip' element={<FlipBox />} />
        </Routes>
      </Router>
    </>
  );
};


export default App;