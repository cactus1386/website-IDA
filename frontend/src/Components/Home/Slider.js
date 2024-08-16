import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../CSS/Slider.css";
import "../../font/font.css";

function Slider() {
  const [Images, setImages] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
  myHeaders.append(
    "X-CSRFToken",
    "uRMtwzazkgU3EARvj9tuZwHJUY7L7usZAMA0suaHj3GOrDrPJ2xU4iwenpSCPprj"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/slider/slider/", requestOptions)
    .then((response) => response.json())
    .then((result) => setImages(result))
    .catch((error) => console.error(error));

  return (
    <div class="pt-3">
      <div class="col-md-12">
        <div className="col-md-12" style={{ height: "50px" }}>
          <div
            className={`flip-box ${isFlipped ? "flipped" : ""}`}
            onClick={handleFlip}
          >
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <h5 class="pb-2 fontv h5 pt-2">شرکت هوش داده هدف</h5>
              </div>
              <div className="flip-box-back" dir="rtl">
                <h5 class=" fontv h5 ">
                  پیشرو در زمینه اتوماسیون صنعتی و اینترنت اشیا
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center pt-3">
          <div class="col-md-12">
            <Carousel>
              {Images.map((c) => (
                <Carousel.Item>
                  <img className="d-block w-100 img" src={c.image} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
