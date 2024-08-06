import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../../CSS/Slider.css";
import "../../font/font.css";

function Slider() {
    const [images, setImages] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("X-CSRFToken", "q5XlxFKrxEgUFqbpOy08Zj2HKNUpKq9yvLvTeMxS0dCnWnx4YDgGB9uwsNuoUjpacurl");

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };

            try {
                const response = await fetch("http://127.0.0.1:8000/slider/slider/", requestOptions);
                const result = await response.json();
                setImages(result);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className='pt-3'>
            <div className="col-md-12">
                <div className="col-md-12" style={{ height: '50px' }}>
                    <div
                        className={`flip-box ${isFlipped ? 'flipped' : ''}`}
                        onClick={handleFlip}
                    >
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h5 className="pb-2 fontv h5 pt-2">شرکت هوش داده هدف</h5>
                            </div>
                            <div className="flip-box-back" dir="rtl">
                                <h5 className="fontv h5">پیشرو در زمینه اتوماسیون صنعتی و اینترنت اشیا</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center pt-3">
                    <div className="col-md-12">
                        <Carousel>
                            {Array.isArray(images) && images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img className="d-block w-100 img" src={image.image} alt={`Slide ${index}`} />
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
