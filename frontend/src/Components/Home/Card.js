import 'bootstrap/dist/css/bootstrap.css'
import dimond from '../../Assets/Dimond.png'
import React, { useState } from 'react';
import "../../CSS/Cardflip.css";
import "../../font/font.css";


function FlipBox() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div class="col-md-12">
      <div className="col-md-12 " style={{ height: '50px' }}>
        <div
          className={`flip-boxt ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <div className="flip-box-innert">
            <div className="flip-box-frontt">
              <h5 class="pb-2 fontv h5">رویکرد ها</h5>
            </div>
            <div className="flip-box-backt" dir="rtl">
              <h5 class=" fontv  h5 ">شرکت شرکت شرکت</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-3">
        <div className="col-md-3 " style={{ height: '150px' }}>
          <div
            className={`flip-box ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
          >
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div class="d-flex justify-content-center row ">
                  <img class="w-25 pt-3" src={dimond} />
                  <h4 class="pb-2 fontv text-light">همواره پیشرفت</h4>
                </div>
              </div>
              <div className="flip-box-back" dir="rtl">
                <h5 class=" fontv text-light h5 ">ما در تولید محصولاتمان
                  فرآیندی نوین را به کار می بریم.
                  بر این عقیده ایم که محصول موفق
                  محصولی است که نوین و مدرن باشد.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FlipBox;


