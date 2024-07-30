import React, { useEffect, useState } from 'react';
import Slider from './Home/Slider';
import Product from './Home/Product';
import Application from './Home/Application';
import Internet from './Home/Internet';

import '../CSS/Animation.css';


const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll1);
    return () => {
      window.removeEventListener('scroll', handleScroll1);
    };
  }, []);

  const handleScroll1 = () => {
    if (window.scrollY > 1500) { // Change this value to the position where you want the animation to trigger
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
    if (window.scrollY > 900) { // Change this value to the position where you want the animation to trigger
      setIsVisible3(true);
    }
  };
  return (
    <div className="container-fluid">
      <div>
        <Slider />
      </div>
      <div className={`slide-intori ${isVisible2 ? 'visible' : ''}`}>
      <div className="pt-3 row mb-3">
            <div className="col-md-12" style={{ height: '50px'}}>
              <div
                className={`flip-boxt ${isFlipped ? 'flipped' : ''}`}
                onClick={handleFlip}
              >
                <div className="flip-box-innert">
                  <div className="flip-box-frontt">
                    <h5 className="pb-2 fontv h5">محصولات</h5>
                  </div>
                  <div className="flip-box-backt" dir="rtl">
                    <h5 className="fontv h5">شرکت هوش داده هدف</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Product />
      </div>
      <div className={`slide-in ${isVisible3 ? 'visible' : ''}`}>
        <div class="pt-3 "><Application /></div>
      </div>
      <div className={`slide-intori ${isVisible1 ? 'visible' : ''}`}>
        <Internet />
      </div>

    </div>
  );
};

export default Home;
