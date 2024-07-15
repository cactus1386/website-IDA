import React from 'react';
import applic from "../../Assets/applic2.png"
import scada from "../../Assets/scada.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../CSS/Application.css";
import "../../CSS/General.css";

function Application() {
  return (<> 
    <div class="col-md-12 bg-primary fontv" style={{ height: '600px' }}>
        <div class="col-md-4">
          <div class="pt-5">
            <div class="card " style={{height:'500px'}}>
              <div style={{ paddingTop: '80px' ,paddingRight:'30px'}}><img src={applic} class=" Img "/></div>
              <div style={{paddingRight:'30px'}}><img src={scada} class=" Img "/></div>         
            </div> 
          </div>
        </div>
        <div class="col-md-3"></div>
        <div>
              <span >
                ویژگیهای نرم افزار SCADA Mission

                ﺳﺎﻣﺎﻧﻪ ﻧﺮم اﻓﺰاری SCADA-Mission  ﯾﮑﯽ از ﻣﺤﺼﻮﻻت ﺷﺮﮐﺖ داﻧﺶ ﺑﻨﯿﺎن ﻫﻮش داده ﻫﺪف اﺳﺖ ﮐﻪ ﮐﺎرﺑﺮد اﺻﻠﯽ آن اُﺗﻮﻣﺎﺳﯿﻮن، ﻣﻮﻧﯿﺘﻮرﯾﻨﮓ و ﮐﻨﺘﺮل ﺷﺒﮑﻪ ﻫﺎی ﭘﯿﭽﯿﺪه ای ﻧﻈﯿﺮ ﺻﻨﺎﯾﻊ ﺗﻮﻟﯿﺪ و ﺗﻮزﯾﻊ اﻧﺮژی اﺳﺖ. اﯾﻦ ﺳﺎﻣﺎﻧﻪ از ﻣﺠﻤﻮﻋﻪ ﻋﻈﯿﻤﯽ از ﻣﺎژول ﻫﺎی ﻧﺮم اﻓﺰاری ﺳﺎﺧﺘﻪ ﺷﺪه ﮐﻪ در ﺟﻬﺖ ﮐﺎرﺑﺮی ﻫﺮﭼﻪ ﺑﯿﺸﺘﺮ و ﺑﻬﺘﺮ در ﺻﻨﺎﯾﻊ ﻣﺨﺘﻠﻒ ﺗﻮﺳﻂ ﻣﺘﺨﺼﺼﯿﻦ ﻣﺎ ﺗﻮﺳﻌﻪ داده ﺷﺪه اﺳﺖ. در اﺳﮑﺎدا اﻣﻨﯿﺖ، ﺗﻮاﻧﺎﯾﯽ ﺑﻪ ﻫﻤﺮاه ﭘﺸﺘﯿﺒﺎﻧﯽ و ﺗﻮﺳﻌﻪ ﺑﺎﻻﺗﺮﯾﻦ اﻫﻤﯿﺖ را دارﻧﺪ و ﻫﻤﭽﻨﯿﻦ ﯾﮏ ﻣﺤﺼﻮل ﺑﻮﻣﯽ را اراﺋﻪ داده اﯾﻢ ﮐﻪ ﻫﻤﻪ ی اﯾﻦ ﻣﻮارد را در ﺳﻄﺢ ﺑﺎﻻﯾﯽ ﻓﺮاﻫﻢ ﻣﯽ ﮐﻨﺪ.
              </span>   
        </div>
    </div>
  </>
  );
}

export default Application;

