import React from 'react';
import applic from "../../Assets/applic2.png"
import scada from "../../Assets/scada.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../CSS/Application.css";
import "../../CSS/General.css";
import '../../CSS/Animation.css';


function Application() {
  return (<> 

        <div class="col-md-12 bg-blue fontv " dir="rtl" style={{height:"500px"}} >
            <div class="col-md-12 d-flex justify-content-center">
              <div class="col-md-5 card" style={{marginTop:'25px'}}>
                <div class="pt-5 ">
                    <div ><img src={applic} class=" Imagw " style={{marginRight:'100px'}}/></div>
                    <div ><img src={scada} class=" Imagw " style={{marginRight:'100px'}}/></div>         
                </div>
              </div>
              <div class="col-md-5 pt-5 text-light" style={{paddingRight:"100px"}}>
                    <span >
                      ویژگیهای نرم افزار SCADA Mission

                      ﺳﺎﻣﺎﻧﻪ ﻧﺮم اﻓﺰاری SCADA-Mission  ﯾﮑﯽ از ﻣﺤﺼﻮﻻت ﺷﺮﮐﺖ داﻧﺶ ﺑﻨﯿﺎن ﻫﻮش داده ﻫﺪف اﺳﺖ ﮐﻪ ﮐﺎرﺑﺮد اﺻﻠﯽ آن اُﺗﻮﻣﺎﺳﯿﻮن، ﻣﻮﻧﯿﺘﻮرﯾﻨﮓ و ﮐﻨﺘﺮل ﺷﺒﮑﻪ ﻫﺎی ﭘﯿﭽﯿﺪه ای ﻧﻈﯿﺮ ﺻﻨﺎﯾﻊ ﺗﻮﻟﯿﺪ و ﺗﻮزﯾﻊ اﻧﺮژی اﺳﺖ. اﯾﻦ ﺳﺎﻣﺎﻧﻪ از ﻣﺠﻤﻮﻋﻪ ﻋﻈﯿﻤﯽ از ﻣﺎژول ﻫﺎی ﻧﺮم اﻓﺰاری ﺳﺎﺧﺘﻪ ﺷﺪه ﮐﻪ در ﺟﻬﺖ ﮐﺎرﺑﺮی ﻫﺮﭼﻪ ﺑﯿﺸﺘﺮ و ﺑﻬﺘﺮ در ﺻﻨﺎﯾﻊ ﻣﺨﺘﻠﻒ ﺗﻮﺳﻂ ﻣﺘﺨﺼﺼﯿﻦ ﻣﺎ ﺗﻮﺳﻌﻪ داده ﺷﺪه اﺳﺖ. در اﺳﮑﺎدا اﻣﻨﯿﺖ، ﺗﻮاﻧﺎﯾﯽ ﺑﻪ ﻫﻤﺮاه ﭘﺸﺘﯿﺒﺎﻧﯽ و ﺗﻮﺳﻌﻪ ﺑﺎﻻﺗﺮﯾﻦ اﻫﻤﯿﺖ را دارﻧﺪ و ﻫﻤﭽﻨﯿﻦ ﯾﮏ ﻣﺤﺼﻮل ﺑﻮﻣﯽ را اراﺋﻪ داده اﯾﻢ ﮐﻪ ﻫﻤﻪ ی اﯾﻦ ﻣﻮارد را در ﺳﻄﺢ ﺑﺎﻻﯾﯽ ﻓﺮاﻫﻢ ﻣﯽ ﮐﻨﺪ.
                    </span>   
                    <div class="pt-2">
                      {`\u2022`}ﺳﺎﻣﺎﻧﻪ ﻫﺎی اﺗﻮﻣﺎﺳﯿﻮن ﺻﻨﻌﺘﯽ 
                    </div>
                    <div class="pt-2">
                      {`\u2022`}ﺳﺎﻣﺎﻧﻪ ﻫﺎی اﺗﻮﻣﺎﺳﯿﻮن ﺧﺎﻧﮕﯽ 
                    </div>
                    <div class="pt-2">
                      {`\u2022`}ﺳﺎﻣﺎﻧﻪ ﻫﺎی ﺣﺴﺎﺑﺪاری اﻧﺮژی
                    </div>
                    <div class="pt-2">
                      {`\u2022`}ﺳﺎﻣﺎﻧﻪ ﻫﺎی اﻣﻨﯿﺘﯽ و اﻋﻼم ﺣﺮﯾﻖ 
                    </div>
                    <div class="pt-2">
                      {`\u2022`}ﺳﺎﻣﺎﻧﻪ ﻫﺎی ﮐﻨﺘﺮل دﺳﺘﺮﺳﯽ
                    </div>
                    <div class="pt-3" style={{marginRight:"40px"}}>
                    <button class="btn btn-md btn-outline-dark col-md-12">اطلاعات بیشتر</button>
                    </div>
              </div>
              <div class="col-md-2"></div>
            </div>
        </div>
          </>
  );
}

export default Application;

