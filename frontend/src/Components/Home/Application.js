import React from 'react';
import applic from "../../Assets/applic2.png"
import scada from "../../Assets/scada.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../CSS/Application.css";
import "../../CSS/General.css";
import '../../CSS/Animation.css';

function Application() {
  return (<>
    <div className="container mt-5 bg-blue fontv text-light" dir="rtl" style={{ padding: '25px', borderRadius: '15px' }}>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <img src={applic} className="img-fluid rounded mb-3" alt="SCADA Mission" />
            <img src={scada} className="img-fluid rounded" alt="SCADA Mission" />
          </div>
        </div>
        <div className="col-md-6 pt-5">
          <span className="fontv">
            ویژگیهای نرم افزار SCADA Mission
            ﺳﺎﻣﺎﻧﻪ ﻧﺮم اﻓﺰاری SCADA-Mission  ﯾﮑﯽ از ﻣﺤﺼﻮﻻت ﺷﺮﮐﺖ داﻧﺶ ﺑﻨﯿﺎن ﻫﻮش داده ﻫﺪف اﺳﺖ ﮐﻪ ﮐﺎرﺑﺮد اﺻﻠﯽ آن اُﺗﻮﻣﺎﺳﯿﻮن، ﻣﻮﻧﯿﺘﻮرﯾﻨﮓ و ﮐﻨﺘﺮل ﺷﺒﮑﻪ ﻫﺎی ﭘﯿﭽﯿﺪه ای ﻧﻈﯿﺮ ﺻﻨﺎﯾﻊ ﺗﻮﻟﯿﺪ و ﺗﻮزﯾﻊ اﻧﺮژی اﺳﺖ. اﯾﻦ ﺳﺎﻣﺎﻧﻪ از ﻣﺠﻤﻮﻋﻪ ﻋﻈﯿﻤﯽ از ﻣﺎژول ﻫﺎی ﻧﺮم اﻓﺰاری ﺳﺎﺧﺘﻪ ﺷﺪه ﮐﻪ در ﺟﻬﺖ ﮐﺎرﺑﺮی ﻫﺮﭼﻪ ﺑﯿﺸﺘﺮ و ﺑﻬﺘﺮ در ﺻﻨﺎﯾﻊ ﻣﺨﺘﻠﻒ ﺗﻮﺳﻌﻪ داده ﺷﺪه اﺳﺖ. در اﺳﮑﺎدا اﻣﻨﯿﺖ، ﺗﻮاﻧﺎﯾﯽ ﺑﻪ ﻫﻤﺮاه ﭘﺸﺘﯿﺒﺎﻧﯽ و ﺗﻮﺳﻌﻪ ﺑﺎﻻﺗﺮﯾﻦ اﻫﻤﯿﺖ را دارﻧﺪ و ﻫﻤﭽﻨﯿﻦ ﯾﮏ ﻣﺤﺼﻮل ﺑﻮﻣﯽ را اراﺋﻪ داده اﯾﻢ ﮐﻪ ﻫﻤﻪ ی اﯾﻦ ﻣﻮارد را در ﺳﻄﺢ ﺑﺎﻻﯾﯽ ﻓﺮاﻫﻢ ﻣﯽ ﮐﻨﺪ.
          </span>
          <div className="pt-2">
            {`\u2022`}ﺳﺎﻣﺎﻧﻪ ﻫﺎی اﺗﻮﻣﺎﺳﯿﻮن ﺻﻨﻌﺘﯽ
          </div>
          <div className="pt-2">
            {`\u2022`}ﺳﺎﻣﺎﻧﻪ ﻫﺎی اﺗﻮﻣﺎﺳﯿﻮن ﺧﺎﻧﮕﯽ
          </div>
          <div className="pt-2">
            {`\u2022`}ﺳﺎﻣﺎﻧﻪ ﻫﺎی ﺣﺴﺎﺑﺪاری اﻧﺮژی
          </div>
          <div className="pt-2">
            {`\u2022`}ﺳﺎﻣﺎﻧﻪ ﻫﺎی اﻣﻨﯿﺘﯽ و اﻋﻼم ﺣﺮﯾﻖ
          </div>
          <div className="pt-2">
            {`\u2022`}ﺳﺎﻣﺎﻧﻪ ﻫﺎی ﮐﻨﺘﺮل دﺳﺘﺮﺳﯽ
          </div>
          <div className="pt-3" style={{ marginRight: "40px" }}>
            <a href="/ida-ltd/pi" class="link"><button className="btn btn-md btn-outline-light col-md-12">اطلاعات بیشتر</button></a>
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default Application;
