import React, { useState, useEffect } from "react";
import parser from "html-react-parser";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "../CSS/ProductInfo.css";
import img1 from "../Assets/hmi-steel-1.png";
import img2 from "../Assets/applic.png";
import img3 from "../Assets/SCADA-Web-UI.png";

const Home = () => {
  const [detail, setDetail] = useState({}); // Changed to an object
  const [loading, setLoading] = useState(true); // Loading state
  const location = useLocation();
  const [id, setId] = useState("");

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

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramId = searchParams.get("id");
    if (paramId) {
      setId(paramId);
    }
  }, [location.search]);

  useEffect(() => {
    if (id) {
      setLoading(true); // Set loading to true before fetching
      fetch("http://127.0.0.1:8000/api/products/" + id, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => {
          setDetail(result);
          setLoading(false); // Set loading to false after fetching
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          setLoading(false); // Set loading to false on error
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div class=" col-md-12 d-flex justify-content-center fontv">
        <h3>کمی صبر کنید...</h3>
      </div>
    ); // Show loading state
  }

  return (
    <div class="fontv">
      <div class="pt-3 p-3 fontv">{parser(detail.body)}</div>
      <div class="d-flex justify-content-center pt-3">
        <div class="col-md-6">
          <Carousel>
            {detail.images.map((w, index) => (
              <Carousel.Item>
                <img className="d-block w-100 Img" src={w.image} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
