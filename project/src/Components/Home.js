import cinematicVideo from '../video/video.mp4';
import React, { useState, useEffect } from 'react';
import '../Styles/home.css';

const Home = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);


    return (
        <div className="home-page fullscreen">
            <div className="fullscreen-image">
                {isVideoPlaying ? (
                    <video
                        key="video"
                        src={cinematicVideo}
                        type="video/mp4"
                        autoPlay
                        loop
                        muted
                        className="fullscreen-video"
                    />
                ) : null}
            </div>
            <div className="welcome-content">
                <h2><text className='CSU'>C</text>ARAGA <text className='CSU'>S</text>TATE <text className='CSU'>U</text>NIVERSITY</h2>
                <p>Explore the wonders of space and science.</p>
            </div>
        </div>
    );
};

export default Home;
