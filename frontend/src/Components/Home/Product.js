import 'bootstrap/dist/css/bootstrap.css'
import applic from '../../Assets/applic.png'
import internet from '../../Assets/internet.png'
import plc from '../../Assets/plc.png'
import React, { useState } from 'react';
import "../../CSS/Cardflip.css";
import "../../font/font.css";


function Product() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const [Products, seProducts] = useState([
    { Name: "اینترنت اشیاء صنعتی", Description: "قابلیت اتصال به سیستم های اسکادا, قابلیت توسعه سریع، آسان و کم هزینه مطابق با الزامات توانیر و پدافند غیر عامل امکان رمزنگاری و جلوگیری از شنود اطلاعات سرعت انتقال متوسط اطلاعات هزینه بسترسازی متوسط و بهره برداری ناچیز", Img: internet },
    { Name: "DCU / PLC", Description: "دستگاه DCU یک کامپیوتر است که به پورت‌های ورودی و خروجی خاصی مجهز شده است. کار اصلی DCU گرفتن اطلاعات از پورت‌های ورودی و انتقال آن به مرکز کنترل توسط پورت‌های خروجی است. برای اینکه این کار بطور صحیح انجام شود DCU نیازمند اجرای یک نرم‌افزار مخصوص به خود است. روی DCU سیستم عامل لینوکس نصب شده که از وظایف آن اجرای نرم‌افزار DCU است. ", Img: plc },
    { Name: "نرم افزار اسکادا میژن", Description: "مانیتور کردن یا کنترل فرایندهای شیمیایی، حمل و نقل، سیستم‌های آبرسانی شهری، کنترل تولید و توزیع انرژی الکتریکی و در خطوط نفت و گاز و سایر فرایندهای گسترده، نیاز به سامانه های کنترل و اندازه گیری در مقیاس بزرگ می باشد. این سامانه ای می‌تواند بر پایه داده‌های بدست‌آمده دستورهای لازم را صادر کند. همچنین این داده‌ها در یک سیستم ثبت اطلاعات که قابلیت ترسیم نمودار و تحلیل اطلاعات را هم دارد. ", Img: applic },
  ])
  return (
    <div class="col-md-12">
      <div className="col-md-12 " style={{ height: '50px' }}>
        <div
          className={`flip-boxt ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <div className="flip-box-innert">
            <div className="flip-box-frontt">
              <h5 class="pb-2 fontv h5">محصولات</h5>
            </div>
            <div className="flip-box-backt" dir="rtl">
              <h5 class=" fontv  h5 ">شرکت هوش داده هدف</h5>
            </div>
          </div>
        </div>
      </div>
      {Products.map(c => (<div class="col-md-3 pt-3 p-3">
        <div className="col" style={{ height: '450px' }}>
          <div
            className={`flip-box ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
          >
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div class="d-flex justify-content-center row ">
                  <h2 class="pt-3 fontv text-light">{c.Name}</h2>
                  <img class="w-100 pt-5" src={c.Img} />
                </div>
              </div>
              <div className="flip-box-back" dir="rtl">
                <h5 class=" fontv text-light h5 ">{c.Description}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Product;


