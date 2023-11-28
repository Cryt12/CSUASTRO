import React, { useEffect } from 'react';
import '../Styles/science.css';

const Science = () => {
    useEffect(() => {
        document.body.classList.add('science_body');

        return () => {
            document.body.classList.remove('science_body');
        };
    }, []);

    return (
        <div className="science-page fullscreen">
            {/* First Page */}
            <div className="fullscreen-image-section">
                <div className="learn-more-content">
                    <p>PLANETARY SCIENCE</p>
                    <p className='solar'>SOLAR SYSTEM</p>
                    <button className="learn-more-button">
                        <h2>LEARN MORE</h2>
                    </button>
                </div>
                <div className="solar-photo"></div>
            </div>

            {/* Second Page */}
            <div className="fullscreen-image-section">
                <div className="learn-more-content2">
                    <p>CELESTIAL BODIES</p>
                    <p className='sun'>SUN</p>
                    <button className="learn-more-button">
                        <h2>LEARN MORE</h2>
                    </button>
                </div>
                
                <div className="sun-photo"></div>
            </div>

            {/* Third Page */}
            <div className="fullscreen-image-section">
                <div className="learn-more-content3">
                    <p>PLANETARY SCIENCE</p>
                    <p className='earth'>EARTH</p>
                    <button className="learn-more-button">
                        <h2>LEARN MORE</h2>
                    </button>
                </div>
               
                <div className="earth-photo"></div>
            </div>
            </div>
    );
};

export default Science;
