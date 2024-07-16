import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/General.css';

function ContactUs() {
  return (<> <div className="container">
      <div className="row">
        <div className="col-12 bg-blue fontv" style={{ height: '100px' }}>
          <div className="d-flex justify-content-center pt-4">
            <h2 className="text-light fontv">تمـــاس بـــا مـــا</h2>
          </div>
        </div>
      </div>
      <div className="row pt-5 fontv">
        <div class="col-md-2"></div>
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
          <div className="card p-3 shadow">
            <label className="h5">*نام و نام خانوادگی:</label>
            <input className="form-control input-lg bg-light" type="text" />
            <label className="h5 pt-3">نام شرکت:</label>
            <input className="form-control input-lg bg-light" type="text" />
            <label className="h5 pt-3">ایمیل:</label>
            <input className="form-control input-lg bg-light" type="text" />
            <label className="h5 pt-3">*شماره تلفن:</label>
            <input className="form-control input-lg bg-light" type="text" />
            <label className="h5 pt-3">متن پیام</label>
            <textarea className="form-control input-lg bg-light" type="text" />
            <div className="pt-3">
              <label className="pb-1">پیوست</label>
              <input className="form-control input-lg bg-light" type="file" />
            </div>
            <div className="pt-4 pb-3 d-flex justify-content-center">
              <button className="btn btn-outline-success col-md-8">ارسال</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  
  
  
  
  
  
  </>
  );
}

export default ContactUs;

