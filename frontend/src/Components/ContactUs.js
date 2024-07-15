import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function ContactUs() {
  return (<> <div class="pt-3">  
            <div class="col-md-12 bg-primary fontv" style={{ height: '100px' }}>
                <div class="d-flex justify-content-center pt-4">
                    <h2 class="text-light fontv">تماس با ما</h2>
                </div>
            </div>
            </div>
            <div class="row pt-5 fontv " style={{ paddingRight: '200px' ,paddingLeft :'200px'}}>
                <div class="row card p-3 shadow">
                    <label class="h5">*نام و نام خانوادگی:</label>
                    <div class="col-md-11">
                        <input class="form-control input-lg bg-light " type="text"/>
                    </div>
                    <label class="h5 pt-3">نام شرکت:</label>
                    <div class="col-md-11">
                        <input class="form-control input-lg bg-light " type="text"/>
                    </div>
                    <label class="h5 pt-3">ایمیل:</label>
                    <div class="col-md-11">
                        <input class="form-control input-lg bg-light " type="text"/>
                    </div>
                    <label class="h5 pt-3">*شماره تلفن:</label>
                    <div class="col-md-11">
                        <input class="form-control input-lg bg-light " type="text"/>
                    </div>
                    <label class="h5 pt-3">متن پیام</label>
                    <div class="col-md-11">
                        <textarea class="form-control input-lg bg-light " type="text"/>
                    </div>
                    <div class="col-md-11 pt-3">
                        <label class=" pb-1">پیوست</label>
                    <input class="form-control input-lg bg-light " type="file"/>
                    </div>
                    <div class="pt-4 pb-3 d-flex justify-content-center">
                        <button class="btn btn-outline-success  col-md-8">ارسال</button>
                    </div>
                </div>



            </div>
  
  
  
  
  
  
  
  
  </>
  );
}

export default ContactUs;

