import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import "../../CSS/Cardflip.css";
import "../../CSS/General.css";
import "../../font/font.css";
import '../../CSS/Animation.css';

function Product() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("X-CSRFToken", "q5XlxFKrxEgUFqbpOy08Zj2HKNUpKq9yvLvTeMxS0dCnWnx4YDgGB9uwsNuoUjpa");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      try {
        const response = await fetch("http://127.0.0.1:8000/api/products/", requestOptions);
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="fontv">
      <div className="row col-md-12">
        {products.slice(0, 3).map((product, index) => (
          <div key={index} className="col-md-4">
            <div className="fh">
              <div
                className={`flip-box ${isFlipped ? 'flipped' : ''}`}
                onClick={handleFlip}
              >
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="d-flex justify-content-center row">
                      <h2 className="pt-4 fontv text-light">{product.title}</h2>
                      <img className="w-100 pt-5" src={product.pic} alt={product.title} />
                    </div>
                  </div>
                  <div className="flip-box-backk" dir="rtl">
                    <h5 className="fontv text-light h5 pt-3">{product.description}</h5>
                    <div className="pt-3 fontv">
                      <a href={'/pi?id=' + product.id} className="link">
                        <button className="btn btn-outline-light btn-md col-md-12">اطلاعات بیشتر</button>
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
