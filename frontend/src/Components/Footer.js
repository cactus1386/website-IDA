import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'../CSS/BGC.css';
import "https://kit.fontawesome.com/6c2a0de8a3.js" ;
function Footer() {
  return (
    <footer className="bg-gradiant text-light py-5 fontv">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>درباره ما</h5>
            <p>شرکت دانش بنیان هوش داده هدف از سال 1394 با تجربه 10 ساله در حوزه های فناوری اطلاعات، هوشمند سازی و مانیتورینگ آنلاین فرآیندها شروع به فعالیت نموده است.این شرکت در سال 1396 موفق به استقرار در پارک علم و فناوری دانشگاه تحصیلات تکمیلی علوم پایه زنجان گردید و در پاییز 1396 رتبه دانش بنیانی این شرکت توسط معاونت علمی و فناوری ریاست جمهوری مورد تایید قرار گرفت.</p>
          </div>
          <div class="col-md-1"></div>
          <div className="col-md-3">
            <h5>دسترسی سریع</h5>
            <ul>
              <li><a class="link"href="/">خانه</a></li>
              <li><a class="link" href="/about">درباره ما</a></li>
              <li><a class="link" href="#">خدمات</a></li>
              <li><a class="link" href="#">ارتباط با ما</a></li>
            </ul>
          </div>
          <div className="col-md-3 ">
            <h5>تماس با ما</h5>
            <div class=" row">
                <div>
                <i class="fa-solid fa-location-dot text-dark pt-1"></i>
                    <a class="link"> زﻧﺠﺎن، ﺑﻠﻮار ﭘﺮﻓﺴﻮر ﺛﺒﻮﺗﯽ، ﭘــﺎرك ﻋﻠــﻢ و ﻓﻨـــــﺎورى ﺗﺤﺼﯿﻼت ﺗﮑﻤﯿﻠﻰ ﻋﻠﻮم زﻧﺠﺎن، ﻃﺒﻘﻪ اول، واﺣﺪ107 </a>
                </div>
                <div>
                <i class="fa-solid fa-phone text-dark pt-3 p-1"></i>
                    <a  class="link">02433154315</a>
                </div>
                <div>
                <i class="fa-solid fa-envelope text-dark pt-3 p-1"></i>
                    <a  class="link">info@ida-ltd.com</a>
                </div>
                <div>
                    <div class="pt-2 " style={{ paddingRight: '25px' }}>
                        <a href="https://www.instagram.com/" class="hover"><i class="fa-brands fa-instagram text-primary p-1 h3 border rounded-circle bg-light"></i></a>
                        <a href="https://twitter.com/share?url=ida-ltd.ir/"><i class="fa-brands fa-twitter text-primary p-1 h3 border rounded-circle bg-light" ></i></a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=ida-ltd.ir/"><i class="fa-brands fa-facebook text-primary p-1 h3 border rounded-circle bg-light " ></i></a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container d-flex justify-content-center">
            <p class="h5">&copy;  2024 ida Intelligent, Data, Aim </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

