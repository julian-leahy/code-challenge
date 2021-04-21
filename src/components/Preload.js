import React from 'react';
import './../styles/Preload.scss';

function Preload() {
    return (
        <div className="loader-wrapper">
            <div className="loader"></div>
            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
        </div>
    )
}

export default Preload;