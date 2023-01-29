import React from 'react';
import'./downloadHero.css';
import logo from '../../img/LogoBig.png';
import google from '../../img/Frame 259.png';
import apple from '../../img/Frame 260.png';

const DownloadHero = () => {
    return (
        <div className="downloadHero-section">
            <div className="downloadHero-container">
                <div className="downloadHero-title">
                    <h1>Coming Soon!</h1>
                </div>
                <div className="downloadHero-img">
                    <img loading='lazy' src={logo} alt={logo} />
                </div>
                <div className="downloadHero-icons">
                    <img loading='lazy' src={google} alt={google} />
                    <img loading='lazy' src={apple} alt={apple} />
                </div>
            </div>
        </div>
    )
}

export default DownloadHero
