import React from "react";
import lpwan from "../../Assets/lpwan.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CSS/Application.css";
import "../../CSS/General.css";
import "../../CSS/Animation.css";

function Application() {
  return (
    <>
      <div
        className="container mt-5 bg-blue fontv text-light"
        dir="rtl"
        style={{ padding: "10px", borderRadius: "15px" }}
      >
        <div className="row">
          <div className="col-md-6 pt-4 p-5">
            <span className="fontv h2">اینترنت اشیا صنعتی</span>
            <br />
            <div class="pt-2">
              <span>
                تجهیزاتی که بتوانند تحت شبکه ال پی ون از کارآیی مناسبی برخوردار
                باشند در این شرکت تحت نام تجاری لوتکس طراحی و در حال ساخت می
                باشند. این تجهیزات شامل مودم ها و گیت وی می باشد با توجه به این
                که بسیاری از کاربردهای اینترنت اشیا نیازمند آن¬اند که دستگاهها
                بتوانند با حداقل توان فعالیت کرده و طول عمر باتری بالایی داشته
                باشند. همچنین برای آنکه بتوان تعداد بیشتری از دستگاهها (اشیاء)
                را تحت پوشش قرار داد، نیاز است از بستری استفاده شود که قابلیت
                دریافت اطلاعات از نقاط در فواصل طولانی را نیز داشته باشد. به
                همین منظور مفهموم جدیدی از زیرساخت ارتباطی با عنوان LPWAN مورد
                استفاده قرار میگیرد تا نیازمندی های ذکر شده را مرتفع کرده و
                بتواند در کاربردهای بسیاری مورد استفاده قرار گیرد. به همین منظور
                شرکت هوش داده هدف تکنولوژی LPWAN را برای تامین زیرساخت اینترنت
                اشیاء انتخاب کرده است. با استفاده از این تکنولوژی، بخش اعظمی از
                نیازمندی های زیرساختی در اینترنت اشیا مرتفع گشته و صنایع مختلف
                می توانند بسته به نیازمندی خود از این زیرساخت استفاده نمایند.
              </span>
            </div>
            <div className="pt-3 pb-3">
              <a href="/products" class="link">
                <button className="btn btn-md btn-outline-light col-md-12">
                  اطلاعات بیشتر
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <img
                src={lpwan}
                className="img-fluid rounded mb-3"
                alt="SCADA Mission"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;
