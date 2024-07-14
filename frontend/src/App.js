import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Card from './Components/Slider';
import FlipBox from './Components/Card'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/flip' element={<FlipBox />} />
      </Routes>
    </Router>
  );
};


export default App;