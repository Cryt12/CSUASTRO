
import React, { useEffect } from 'react';
import '../Styles/spaceflight.css';

const Spaceflight = () => {
    useEffect(() => {
        document.body.classList.add('spaceflight_body');

        return () => {
            document.body.classList.remove('spaceflight_body');
        };
    }, []);

    return (
        <div className="spaceflight-page fullscreen">
            {/* First Page */}
            <div className="fullscreen-image-section">
                <div className="learn-more-content">
                    <p>SPACE EXPLORATION</p>
                    <p className='rocket'>ROCKET LAUNCH</p>
                    <button className="learn-more-button">
                        <h2>LEARN MORE</h2>
                    </button>
                </div>
                <div className="rocket-photo"></div>
            </div>

            {/* Second Page */}
            <div className="fullscreen-image-section">
                <div className="learn-more-content2">
                    <p>INTERNATIONAL SPACE STATION</p>
                    <p className='iss'>ISS VIEW</p>
                    <button className="learn-more-button">
                        <h2>LEARN MORE</h2>
                    </button>
                </div>

                <div className="iss-photo"></div>
            </div>

            {/* Third Page */}
            <div className="fullscreen-image-section">
                <div className="learn-more-content3">
                    <p>MOON LANDING</p>
                    <p className='moon'>MOON SURFACE</p>
                    <button className="learn-more-button">
                        <h2>LEARN MORE</h2>
                    </button>
                </div>

                <div className="moon-photo"></div>
            </div>
        </div>
    );
};

export default Spaceflight;
