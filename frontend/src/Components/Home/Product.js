import 'bootstrap/dist/css/bootstrap.css';
import applic from '../../Assets/applic.png';
import internet from '../../Assets/internet.png';
import plc from '../../Assets/plc.png';
import React, {useState} from 'react';
import "../../CSS/Cardflip.css";
import "../../CSS/General.css";
import "../../font/font.css";
import '../../CSS/Animation.css';


function Product() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const [Products, setProducts] = useState([
    { Id:'1',Name: "اینترنت اشیاء صنعتی", Description: "قابلیت اتصال به سیستم های اسکادا, قابلیت توسعه سریع، آسان و کم هزینه مطابق با الزامات توانیر و پدافند غیر عامل امکان رمزنگاری و جلوگیری از شنود اطلاعات سرعت انتقال متوسط اطلاعات هزینه بسترسازی متوسط و بهره برداری ناچیز", Img: internet },
    { Id:'2',Name: "DCU / PLC", Description: "دستگاه DCU یک کامپیوتر است که به پورت‌های ورودی و خروجی خاصی مجهز شده است. کار اصلی DCU گرفتن اطلاعات از پورت‌های ورودی و انتقال آن به مرکز کنترل توسط پورت‌های خروجی است. برای اینکه این کار بطور صحیح انجام شود DCU نیازمند اجرای یک نرم‌افزار مخصوص به خود است. روی DCU سیستم عامل لینوکس نصب شده که از وظایف آن اجرای نرم‌افزار DCU است. ", Img: plc },
    { Id:'3',Name: "نرم افزار اسکادا میژن", Description: "مانیتور کردن یا کنترل فرایندهای شیمیایی، حمل و نقل، سیستم‌های آبرسانی شهری، کنترل تولید و توزیع انرژی الکتریکی و در خطوط نفت و گاز و سایر فرایندهای گسترده، نیاز به سامانه های کنترل و اندازه گیری در مقیاس بزرگ می باشد. این سامانه ای می‌تواند بر پایه داده‌های بدست‌آمده دستورهای لازم را صادر کند. همچنین این داده‌ها در یک سیستم ثبت اطلاعات که قابلیت ترسیم نمودار و تحلیل اطلاعات را هم دارد. ", Img: applic },
  ]);

  return (<>
          <div className="pt-3 row mb-3">
            <div className="" style={{ height: '50px', width:'100%'}}>
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
          <div className="row">
            {Products.slice(0,3).map((product, index) => (
              <div key={index} className="col-md-4 pt-3">
                <div className="col" style={{ height: '500px' }}>
                  <div
                    className={`flip-box ${isFlipped ? 'flipped' : ''}`}
                    onClick={handleFlip}
                  >
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        <div className="d-flex justify-content-center row">
                          <h2 className="pt-3 fontv text-light">{product.Name}</h2>
                          <img className="w-100 pt-5" src={product.Img} alt={product.Name} />
                        </div>
                      </div>
                      <div className="flip-box-backk" dir="rtl">
                        <h5 className="fontv text-light h5">{product.Description}</h5>
                        <div class="pt-3 fontv"><a href="/ida-ltd/pi"class="link"><button class="btn btn-outline-light btn-md col-md-12 ">اطلاعات بیشتر</button></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
</>
  );
}

export default Product;
