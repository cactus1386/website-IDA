import React, { useState, useEffect } from 'react';
import parser from "html-react-parser";
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import "../CSS/ProductInfo.css";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    const [detail, setDetail] = useState({}); // Changed to an object
    const [loading, setLoading] = useState(true); // Loading state
    const location = useLocation();
    const [id, setId] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const paramId = searchParams.get('id');
        if (paramId) {
            setId(paramId);
        }
    }, [location.search]);

    useEffect(() => {
        if (id) {
            const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("X-CSRFToken", "q5XlxFKrxEgUFqbpOy08Zj2HKNUpKq9yvLvTeMxS0dCnWnx4YDgGB9uwsNuoUjpa");

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };

            setLoading(true); // Set loading to true before fetching
            fetch(`http://127.0.0.1:8000/api/products/${id}`, requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    setDetail(result);
                    setLoading(false); // Set loading to false after fetching
                })
                .catch((error) => {
                    console.error('Fetch error:', error);
                    setLoading(false); // Set loading to false on error
                });
        }
    }, [id]);

    if (loading) {
        return <div className="col-md-12 d-flex justify-content-center fontv"><h3>کمی صبر کنید...</h3></div>; // Show loading state
    }

    return (
        <div className="fontv">
            <div className="pt-3 p-3 fontv">{parser(detail.body || '')}</div>
            <div className="d-flex justify-content-center pt-3">
                <div className="col-md-6">
                    <Carousel>
                        {Array.isArray(detail.images) && detail.images.map((w, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100 Img" src={w.image} alt={`Slide ${index}`} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Home;
