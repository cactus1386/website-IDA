import React, { useEffect, useState } from 'react';
import Product from './Home/Product';


import '../CSS/Animation.css';


const Navproducts = () => {

  return (<>
        <div className="row">
            <div className="col-12 bg-blue fontv" style={{ height: '100px' }}>
            <div className="d-flex justify-content-center pt-4">
            <h2 class="text-light fontv">   مـــحصولات</h2>
            </div>
            </div>
        </div>
        <div class="pt-3">
            <Product />
        </div>

  </>);
};

export default Navproducts;
