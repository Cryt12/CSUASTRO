
import React, { useEffect } from 'react';
import '../Styles/observe.css';

const Observing = () => {
    useEffect(() => {
        document.body.classList.add('observe_body');

        return () => {
            document.body.classList.remove('observe_body');
        };
    }, []);

    return (
        <div className="observe-page fullscreen">
            {/* First Page */}
            <div className="fullscreen-image-section">
                <div className="learn-more-content">
                    <p>ASTRONOMICAL EVENTS</p>
                    <p className='asteroid'>ASTEROID</p>
                    <button className="learn-more-button">
                        <h2>LEARN MORE</h2>
                    </button>
                </div>
                <div className="asteroid-photo"></div>
            </div>

            {/* Second Page */}
            <div className="fullscreen-image-section">
                <div className="learn-more-content2">
                    <p>STARGAZING</p>
                    <p className='telescope'>RADIO TELESCOPE</p>
                    <button className="learn-more-button">
                        <h2>LEARN MORE</h2>
                    </button>
                </div>
                
                <div className="telescope-photo"></div>
            </div>

            {/* Third Page */}
            <div className="fullscreen-image-section">
                <div className="learn-more-content3">
                    <p>OBSERVING THE SKY</p>
                    <p className='comet'>HALLEY'S COMET</p>
                    <button className="learn-more-button">
                        <h2>LEARN MORE</h2>
                    </button>
                </div>
               
                <div className="comet-photo"></div>
            </div>
        </div>
    );
};

export default Observing;
