import React from 'react';
import pic from '../Assets/404.png'
import "../CSS/General.css";


const fourOfour = () => {
    return (
        <div class="d-flex justify-content-center">
            <div className="col-md-8 " style={{paddingTop:"10px"}}>
                <div class="bg-blue rounded" style={{height:"570px" , width:"100%"}}>
                    <div class="d-flex justify-content-center">
                        <img src={pic} style={{height:"600px" , width:"auto"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default fourOfour;
