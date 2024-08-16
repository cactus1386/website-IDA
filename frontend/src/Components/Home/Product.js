import "bootstrap/dist/css/bootstrap.css";
import applic from "../../Assets/applic.png";
import internet from "../../Assets/internet.png";
import plc from "../../Assets/plc.png";
import React, { useState } from "react";
import "../../CSS/Cardflip.css";
import "../../CSS/General.css";
import "../../font/font.css";
import "../../CSS/Animation.css";

function Product() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const [Products, setProducts] = useState([]);

  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
  myHeaders.append(
    "X-CSRFToken",
    "BWA4VCcgEQYCTIJzY5rK99mTb0hIDV9FsOt3a4CjpeM1BCadI3PtMmxvItSIQYBW"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/api/products/", requestOptions)
    .then((response) => response.json())
    .then((result) => setProducts(result))
    .catch((error) => console.error(error));
  return (
    <div class="fontv">
      <div className="row col-md-12">
        {Products.slice(0, 3).map((product, index) => (
          <div key={index} className="col-md-4">
            <div className="fh ">
              <div
                className={`flip-box ${isFlipped ? "flipped" : ""}`}
                onClick={handleFlip}
              >
                <div className="flip-box-inner  ">
                  <div className="flip-box-front">
                    <div className="d-flex justify-content-center row">
                      <h2 className="pt-4 fontv text-light">{product.title}</h2>
                      <img
                        className="w-100 pt-5"
                        src={product.pic}
                        alt={product.title}
                      />
                    </div>
                  </div>
                  <div className="flip-box-backk" dir="rtl">
                    <h5 className="fontv text-light h5 pt-3">
                      {product.description}
                    </h5>
                    <div class="pt-3 fontv">
                      <a href={"/pi?id=" + product.id} class="link">
                        <button class="btn btn-outline-light btn-md col-md-12 ">
                          اطلاعات بیشتر
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
