import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/General.css";

function ContactUs() {
  const [Name, setName] = useState([]);
  const [Company, setCompany] = useState([]);
  const [Email, setEmail] = useState([]);
  const [Phone, setPhone] = useState([]);
  const [Message, setMessage] = useState([]);
  const [Attachment, setAttachment] = useState([]);

  function STS() {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "X-CSRFToken",
      "I5gUaftEGbs407OtrA37fN0QrUClx7vSo7IBe8bA2enFNXJJTDiufOWXvpvr0vFE"
    );

    const raw = JSON.stringify({
      name: "string",
      company: "string",
      email: "user@example.com",
      phone: "string",
      message: "string",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/contact/", requestOptions)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }
        return response.json();
      })
      .then((result) => {
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setCompany("");
        setAttachment("");
        console.log(Name);
        console.log(Attachment);
      })
      .catch((error) => {
        console.log("Error posting comment:", error);
      });
  }

  return (
    <>
      {" "}
      <div className="">
        <div className="row">
          <div className="col-12 bg-blue fontv" style={{ height: "100px" }}>
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
              <input
                className="form-control input-lg bg-light"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <label className="h5 pt-3">نام شرکت:</label>
              <input
                className="form-control input-lg bg-light"
                type="text"
                onChange={(e) => setCompany(e.target.value)}
              />
              <label className="h5 pt-3">ایمیل:</label>
              <input
                className="form-control input-lg bg-light"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="h5 pt-3">*شماره تلفن:</label>
              <input
                className="form-control input-lg bg-light"
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className="h5 pt-3">متن پیام</label>
              <textarea
                className="form-control input-lg bg-light"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="pt-3">
                <label className="pb-1">پیوست</label>
                <input
                  className="form-control input-lg bg-light"
                  type="file"
                  onChange={(e) => setAttachment(e.target.value)}
                />
              </div>
              <div className="pt-4 pb-3 d-flex justify-content-center">
                <button
                  className="btn btn-outline-success col-md-8"
                  onClick={STS}
                >
                  ارسال
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
