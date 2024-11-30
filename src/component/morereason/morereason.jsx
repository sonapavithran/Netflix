import React from 'react';
import './morereason.css';
import image from '../poster/icon5.png';
import image1 from '../poster/icon5.png';
import image2 from '../poster/icon6.png';
import image3 from '../poster/icon7.png';


function MoreReasons() {
    return (
        <div className="more-reasons-container">
            <h2 className="reasons-heading">MORE Reasons to joIN</h2>
            <div className="reasons-buttons">
                <button className="reason-button">
                    Stories tailored to your taste
                    <div className="button-image">
                        <img src={image} alt="Reasons" />
                    </div>
                </button>
                <button className="reason-button">
                    Cancel or switch plans anytime
                    <div className="button-image">
                        <img src={image1} alt="Reasons" />
                    </div>
                </button>
                <button className="reason-button">
                    A place for kids
                    <div className="button-image">
                        <img src={image2} alt="Reasons" />
                    </div>
                </button>
                <button className="reason-button">
                    For your phone, tablet, laptop 
                    <div className="button-image">
                        <img src={image3} alt="Reasons" />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default MoreReasons;