import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../CSS/ProductInfo.css";
import img1 from "../Assets/hmi-steel-1.png"
import img2 from "../Assets/applic.png"
import img3 from "../Assets/SCADA-Web-UI.png"

const Home = () => {
    return (<>
        <div class="pt-3">  
            <div class="col-md-12 bg-primary fontv" style={{ height: '80px' }}>
                <div class="d-flex justify-content-center pt-4">
                    <h2 class="text-light fontv">مقدمه</h2>
                </div>
            </div>
            <div class="d-flex justify-content-center pt-3">
                <div class="col-md-11 card p-3 fontv">
                    <span>
                    اسکادا ابزاری برای مونیتورینگ و کنترل ابزار اتوماسیون زیردست بصورت جامع و یک‌پارچه توسط مدیران و اپراتورهای یک مجموعه است. بعنوان مثال، در یک شبکه توزیع برق یا گاز در سطح یک استان، مدیران مجموعه نیاز دارند تا بصورت بلادرنگ از وضعیت تمامی سیستم‌های انتقال، عملکرد صحیح یا ناصحیح دستگاه‎ها، قطعی، مصرف و فشار وارد بر شبکه آگاهی داشته باشند و در صورت نیاز، بعضی از سیستم‌ها را از راه دور خاموش یا روشن کنند. این کار با جمع‌آوری و ذخیره اطلاعات از کنترل‌کننده‌ها ) از جمله PLC و RTU) از راه دور و نمایش آن در یک رابط گرافیکی انسانی (Human Machine Interface) میسر است. این  مجموعه کار توسط نرم‌افزار اسکادا انجام می‌شود.
                    </span>
                    <span>
                    سامانه‌ نرم‌افزاری SCADA Mission یکی از محصولات شرکت دانش‌بنیان هوش داده هدف است که کاربرد اصلی آن اتوماسیون، مونیتورینگ و کنترل شبکه‌های پیچیده‌ی صنایع تولید و توزیع  آب-برق-گاز و همچنین کارخانجات مختلف است. سامانه‌ی SCADA Mission از مجموعه عظیمی از ماژول‌های نرم‌افزاری ساخته شده که در جهت کاربری هرچه بیشتر و بهتر در صنایع مختلف توسط متخصصین شرکت هوش داده هدف توسعه داده شده است. در اسکادا امنیت، قابلیت به همراه پشتیبانی و توسعه بالاترین اهمیت را دارند. SCADA Mission   یک محصول بومی است که همه‌ی این موارد را در سطح بالایی فراهم می‌کند. در این کتابچه قابلیت‌های این اسکادا شرح داده شده است.
                    </span>
                </div>
            </div>
        </div>
        <div class="pt-3">  
            <div class="col-md-12 bg-primary fontv" style={{ height: '80px' }}>
                <div class="d-flex justify-content-center pt-4">
                    <h2 class="text-light fontv">مروری بر عملکرد SCADA Mission</h2>
                </div>
            </div>
            <div class="d-flex justify-content-center pt-3">
                <div class="col-md-11 card p-3 fontv">
                    <span>
                    استفاده از اسکادا تاریخچه‌ای در حدود 50 سال دارد و نسل‌های مختلفی از این سامانه تولید و توسعه داده شده است. سامانه‌یSCADA Mission  از آخرین نسل اسکادا یعنی اسکادای بر مبنای وب محسوب می‌شود. در این سامانه سرور اسکادا با کنترل کننده‌ها  از طریق شبکه در ارتباط است. اطلاعات دریافتی از این ابزار در پایگاه داده سرور اسکادا ذخیره می‌شود و همچنین بصورت بلادرنگ برای اپراتور بصورت گرافیکی در یک صفحه مرورگر وب نمایش داده می‌شود.
                    </span>
                    <span>
                    در اسکادا اپراتور بسادگی می‌تواند از وضعیت تک تک ابزار مطلع شود و در صورت نیاز دستورات لازم را به کنترل‌کننده‌ها ارسال کند. همچنین اپراتور می‌تواند برای پارامتر‌هایی از این دستگاه‌ها حد هشدار تعریف کند تا در صورت رسیدن پارامترها و سنسورها به این مقادیر، عوامل مربوطه سریعا مطلع شوند. در صورت اضافه و کم شدن به کنترل‌کننده‌ها و یا تغییر تنظیماتی در آن‌ها اپراتور ادمین بسادگی می‌تواند این موارد را برای سرور اسکادا تعریف کند و همچنین اینکه طرح و شمای جدیدی برای آن‌ها تولید کند.
                    </span>
                </div>
            </div>
        </div>
        <div class="pt-3">
        <div class="col-md-12 bg-primary fontv" style={{ height: '80px' }}>
                <div class="d-flex justify-content-center pt-4">
                    <h2 class="text-light fontv"> توانایی‌های SCADA Mission</h2>
                </div>
            </div>
            <div class=" d-flex justify-content-center fontv">
                <div class="col-md-4 pt-3 ">
                    <label class="h2">کاربری:</label>
                    <table class="table border rounded text-center">
                        <tbody>
                            <tr>
                            <td>سامانه‌‌هاى اتوماسیون صنعتى</td>
                            </tr>
                            <tr>
                            <td>سامانه‌‌هاى اتوماسیون خانگى</td>
                            </tr>
                            <tr>
                            <td>سامانه‌‌هاى حسابدارى انرژى</td>
                            </tr>
                            <tr>
                            <td> سامانه‌‌هاى امنیتى و اعلام حریق</td>
                            </tr>
                            <tr>
                            <td>سامانه‌‌هاى کنترل دسترسى</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </div>
            <div class=" d-flex justify-content-center fontv">
                <div class="col-md-4 pt-3 ">
                    <label class="h2"> توانایی و عملکرد:</label>
                    <table class="table-bordered table border rounded text-center">
                        <tbody>
                            <tr>
                            <td>مانیتورینگ با مرورگر وب</td>
                            <td> فرمان خودکار و امن</td>
                            </tr>
                            <tr>
                            <td> عدم محدودیت تعداد Tag</td>
                            <td> نوشتن فرمول برای کانال</td>
                            </tr>
                            <tr>
                            <td>صدور فرمان مرحله‌ای</td>
                            <td>پایداری هنگام تغییرات غیرساختاری</td>
                            </tr>
                            <tr>
                            <td>پایداری شبانه روزی</td>
                            <td>بانک اطلاعاتی بلادرنگ</td>
                            </tr>
                            <tr>
                            <td>رنگ‌آمیزی پویای نقشه‌ها</td>
                            <td> نسخه پشتیبان خودکار</td>
                            </tr>
                            <tr>
                            <td>توسعه‌پذیری با سیستم ماژولار</td>
                            <td> تقویم شمسی و میلادی</td>
                            </tr>
                            <tr>
                            <td>ماژول‌های فراوان آماده استفاده</td>
                            <td> سازگار با فرمت‌های AutoCAD</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </div>
            <div class=" d-flex justify-content-center fontv">
                <div class="col-md-4 pt-3 ">
                    <label class="h2">سازگاری:</label>
                    <table class="table-bordered table border rounded text-center">
                        <tbody>
                            <tr>
                            <td>سیستم عامل</td>
                            <td>Windows, Linux, Mac</td>
                            </tr>
                            <tr>
                            <td>مرورگر</td>
                            <td>IE, Chrome, Firefox, Opera, Edge</td>
                            </tr>
                            <tr>
                            <td>سازگاری با بانک‌های اطلاعاتی</td>
                            <td>Oracle, SQL Server, MySQL, Postrage, Ado db</td>
                            </tr>
                            <tr>
                            <td>ایجاد ارتباط با نرم افزارهای دیگر</td>
                            <td>webservice</td>
                            </tr>
                            <tr>
                            <td>پورت‌</td>
                            <td>Serial, TCP, UDP</td>
                            </tr>
                            <tr>
                            <td>فرمت Export داده</td>
                            <td>Excel, PDF, PNG</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </div>
            <div class=" d-flex justify-content-center fontv">
                <div class="col-md-4 pt-3 ">
                    <label class="h2"> پروتکل‌های پشتیبانی شده:</label>
                    <table class="table-bordered table border rounded text-center">
                        <tbody>
                        <tr>
                            <td>Modbus</td>
                            <td> UA-OPC</td>
                            <td>DNP3</td>
                        </tr>
                        <tr>
                            <td>GSM</td>
                            <td>MQTT</td>
                            <td>SNMP</td>
                        </tr>
                        <tr>
                            <td>SMTP</td>
                            <td>IEC60870-5-104</td>
                        </tr>
                        </tbody>
                        </table>
                </div>
            </div>
            <div class=" d-flex justify-content-center fontv">
                <div class="col-md-4 pt-3 ">
                    <label class="h2">امنیت:</label>
                    <table class="table border rounded text-center">
                        <tbody>
                            <tr>
                            <td>رمزنگاری اطلاعات </td>
                            </tr>
                            <tr>
                            <td>پروتکل امنیتی SSL</td>
                            </tr>
                            <tr>
                            <td>گزارش تخطی از دسترسی ها</td>
                            </tr>
                            <tr>
                            <td>ثبت و ردیابی تراکنش ها</td>
                            </tr>
                            <tr>
                            <td> دارای گواهینامه امنیتی</td>
                            </tr>
                            <tr>
                            <td>دسترسی براساس وظیفه سازمانی</td>
                            </tr>
                            <tr>
                            <td>پشتیبانی از Firewall</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </div>
            <div class="pt-3">  
                <div class="col-md-12 bg-primary fontv" style={{ height: '80px' }}>
                    <div class="d-flex justify-content-center pt-4">
                        <h2 class="text-light fontv">گالری تصاویر نرم افزار</h2>
                    </div>
                </div>
                <div class="d-flex justify-content-center pt-3">
                        <div class="col-md-7">
                            <Carousel>
                                <Carousel.Item>
                                    <img className="d-block w-100 Img" src={img1} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100 Img" src={img2} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100 Img" src={img3} />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
            </div>
        </div>

    </>);
};

export default Home;
