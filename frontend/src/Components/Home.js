import React, { useEffect, useState } from 'react';
import Slider from './Home/Slider';
import Product from './Home/Product';
import Application from './Home/Application';
import '../CSS/Animation.css';


const Home = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll1);
    return () => {
      window.removeEventListener('scroll', handleScroll1);
    };
  }, []);

  const handleScroll1 = () => {
    if (window.scrollY > 0) { // Change this value to the position where you want the animation to trigger
      setIsVisible1(true);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll2);
    return () => {
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  const handleScroll2 = () => {
    if (window.scrollY > 300) { // Change this value to the position where you want the animation to trigger
      setIsVisible2(true);
    }
  };



  useEffect(() => {
    window.addEventListener('scroll', handleScroll3);
    return () => {
      window.removeEventListener('scroll', handleScroll3);
    };
  }, []);

  const handleScroll3 = () => {
    if (window.scrollY > 700) { // Change this value to the position where you want the animation to trigger
      setIsVisible3(true);
    }
  };
  return (
    <div className="container-fluid">
      <div>
        <Slider />
      </div>
      <div className={`slide-intori ${isVisible2 ? 'visible' : ''}`}>
        <Product />
      </div>
      <div className={`slide-in ${isVisible3 ? 'visible' : ''}`}>
        <div class="pt-3"><Application /></div>
      </div>

    </div>
  );
};

export default Home;
