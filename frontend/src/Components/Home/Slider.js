import { Carousel } from 'react-bootstrap';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import img1 from '../../Assets/S1.jpg'
import img2 from '../../Assets/S2.jpg'
import "../../CSS/Slider.css";
import "../../font/font.css";



function Slider() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
                <div class='pt-3'>
                    <div class="col-md-12">
                        <div className="col-md-12" style={{ height: '50px' }}>
                            <div
                                className={`flip-box ${isFlipped ? 'flipped' : ''}`}
                                onClick={handleFlip}
                            >
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <h5 class="pb-2 fontv h5 pt-2">شرکت هوش داده هدف</h5>
                                    </div>
                                    <div className="flip-box-back" dir="rtl">
                                        <h5 class=" fontv h5 ">پیشرو در زمینه اتوماسیون صنعتی و اینترنت اشیا</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center pt-3">
                            <div class="col-md-12">
                                <Carousel>
                                    <Carousel.Item>
                                        <img className="d-block w-100 img" src={img1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 img" src={img2} />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Slider;


