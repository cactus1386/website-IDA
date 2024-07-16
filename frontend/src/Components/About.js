import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/About.css';
import '../CSS/General.css';
import img1 from '../Assets/IDA.png'; // تصویر جایگزین برای محصولات
import img2 from '../Assets/SCADA-Web-UI.png';
import img3 from '../Assets/hmi-steel-1.png';
import applic from '../Assets/applic.png';
import internet from '../Assets/internet.png';
import plc from '../Assets/plc.png';



const AboutUs = () => {
    return (<>
        <div class="pt-3">
            <div class="col-md-12 bg-blue fontv " style={{ height: '100px' }}>
                <div class="d-flex justify-content-center pt-4">
                    <h2 class="text-light fontv">دربـــاره مـــا</h2>
                </div>
            </div>  
        </div>
        <div className="container-xxl " dir="rtl">
            <div className="row">
                <div className="col text-center border-bottom border-dark">                  
            <p className="lead fontv p-4">
                        شرکت دانش بنیان هوش داده هدف از سال 1394 با تجربه 10 ساله در حوزه های فناوری اطلاعات، هوشمندسازی و مانیتورینگ آنلاین فرآیندها شروع به فعالیت نموده است. این شرکت در سال 1396 موفق به استقرار در پارک علم و فناوری دانشگاه تحصیلات تکمیلی علوم پایه زنجان گردید و در پاییز 1396 رتبه دانش بنیانی این شرکت توسط معاونت علمی و فناوری ریاست جمهوری مورد تایید قرار گرفت.
                    </p>
                </div>
            </div>
            <div class="mt-3">
                <div class=" card bg-blue ">
                    <div className="row mt-5 align-items-center section p-4  ">
                        <div className="col-md-6">
                            <img src={applic} alt="Focus" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-md-">
                            <h2 className="fontv text-light">تمرکز اصلی شرکت</h2>
                            <p className="fontv text-light">
                                تمرکز اصلی این شرکت بر روی توسعه نرم‌افزار اسکادای بومی و بستر ارتباطی مبتنی بر اینترنت اشیاء (IoT) جهت پیاده‌سازی سیستم‌های هوشمند کنترل اتوماتیک و سیستم‌های مانیتورینگ و آلارم‌دهی مجهز و بلادرنگ می‌باشد. در این راستا نرم‌افزار سرپرستی و جمع‌آوری داده‌ها با برند SCADA Mission و تجهیزات بستر ارتباطی مبتنی بر اینترنت اشیاء با برند Lotex در این شرکت، طراحی، تست و روانه بازار شده است.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            <div class="mt-3">
                <div class=" card bg-blue">
                    <div className="row  align-items-center section p-4">
                        <div className="col-md-6 order-md-2">
                            <img src={internet} alt="Achievements" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-md-right text-light">
                            <h2 className="fontv text-light">دستاوردهای شرکت</h2>
                            <p className="fontv">
                                شایان ذکر است که این شرکت دانش بنیان تنها شرکت دارنده نرم‌افزار اسکادا و تجهیزات مرتبط با بستر ارتباطی دارای گواهی‌نامه امنیتی از مرکز تخصصی آپا در ایران می‌باشد. با توجه به اینکه بسیاری از کاربردهای اینترنت اشیاء نیازمند آن‌اند که دستگاه‌ها بتوانند با حداقل توان فعالیت کرده و طول عمر باتری بالایی داشته باشند، همچنین برای آنکه بتوان تعداد بیشتری از دستگاه‌ها (اشیاء) را تحت پوشش قرار داد، نیاز است از بستری استفاده شود که قابلیت دریافت اطلاعات از نقاط در فواصل طولانی را نیز داشته باشد. به همین منظور مفهوم جدیدی از زیرساخت ارتباطی با عنوان LPWAN مورد استفاده قرار می‌گیرد تا نیازمندی‌های ذکر شده را مرتفع کرده و بتواند در کاربردهای بسیاری مورد استفاده قرار گیرد.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <div class=" card bg-blue">
                    <div className="row mt-5 align-items-center section p-4">
                        <div className="col-md-6">
                            <img src={plc} alt="LPWAN" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-md-left">
                            <h2 className="fontv text-light">تکنولوژی LPWAN</h2>
                            <p className="fontv text-light">
                                شرکت هوش داده هدف تکنولوژی LPWAN را برای تأمین زیرساخت اینترنت اشیاء انتخاب کرده است. با استفاده از این تکنولوژی، بخش اعظمی از نیازمندی‌های زیرساختی در اینترنت اشیا مرتفع گشته و صنایع مختلف می‌توانند بسته به نیازمندی خود از این زیرساخت استفاده نمایند. تجهیزاتی که بتوانند تحت شبکه LPWAN از کارآیی مناسبی برخوردار باشند در این شرکت تحت نام تجاری LOTEX طراحی و در حال ساخت می‌باشند. این تجهیزات شامل مودم‌ها و Gateway می‌باشد.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <div class=" card bg-blue">
                    <div className="row mt-5 align-items-center section p-4">
                        <div className="col-md-6 order-md-2">
                            <img src={img2} alt="Monitoring and Control" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-md-right">
                            <h2 className="fontv text-light">مانیتورینگ و کنترل فرآیندها</h2>
                            <p className="fontv text-light">
                                برای مانیتور کردن یا کنترل فرایندهای شیمیایی، حمل‌ونقل، سیستم‌های آبرسانی شهری، کنترل تولید و توزیع انرژی الکتریکی و در خطوط نفت و گاز و سایر فرآیندهای گسترده، نیاز به سامانه‌های کنترل و اندازه‌گیری در مقیاس بزرگ می‌باشد. چنین سامانه‌ای می‌تواند بر پایه داده‌های بدست‌آمده دستورهای لازم را صادر کند. همچنین این داده‌ها در یک سیستم ثبت اطلاعات یا سیستم مدیریت پایگاه داده ذخیره می‌شوند که معمولاً قابلیت ترسیم نمودار و تحلیل اطلاعات را هم دارد.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <div class=" card bg-blue">
                    <div className="row mt-5 align-items-center section p-4">
                        <div className="col-md-6">
                            <img src={img3} alt="SCADA Systems" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-md-left">
                            <h2 className="fontv text-light">سیستم‌های اسکادا</h2>
                            <p className="fontv text-light">
                                در فاز جمع‌آوری داده‌ها، ثبت، کنترل، پردازش و داده‌کاوی از سالیان گذشته، مفهومی به نام اسکادا که برگرفته از جمله انگلیسی Supervisory Control And Data Acquisition به معنی سامانه سرپرستی و گردآوری داده می‌باشد، مطرح شده است.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center border-top border-dark">
                    <div class="mt-4">  
                        <p className="fontv">ما همواره در تلاشیم تا با بهره‌گیری از دانش و فناوری‌های روز، بهترین خدمات را به مشتریان خود ارائه دهیم. برای کسب اطلاعات بیشتر و ارتباط با ما، لطفاً به وب‌سایت رسمی شرکت هوش داده هدف مراجعه فرمایید.</p>
                    </div>    
                </div>
            </div>
        </div>
    </>);
};

export default AboutUs;
