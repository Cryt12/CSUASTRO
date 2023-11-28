import React, { useEffect } from 'react';
import '../Styles/News.css';
import { Link } from 'react-router-dom';


const News = () => {
    useEffect(() => {
        document.body.classList.add('news_body');

        return () => {
            document.body.classList.remove('news_body');
        };
    }, []);

    return (
        <div className="news-page fullscreen">
        {/* First Page */}
        <div className="fullscreen-image-section1">
          <div className="learn-more-content1">
            <p>SPACE WEATHER</p>
            <p className='solar'>SOLAR STORM</p>
            {}
            <Link to="/learnmore/solarstorm" className="learn-more-button1">
                 <h2>LEARN MORE</h2>
            </Link>
          </div>
          <div className='solar_storm_photo'></div>
        </div>

            {/* Second Page */}
            <div className="fullscreen-image-section1">
                <div className="learn-more-content2">
                    <p>ASTROPHYSICS</p>
                     <p className='blackhole'>BLACKHOLE</p>
                 {}
                 <Link to="/learnmore/blackhole" className="learn-more-button">
                    <h2>LEARN MORE</h2>
                </Link>
            </div>
            <div className="astrophysics-photo"></div>
         </div>

            {/* Third Page */}
            <div className="fullscreen-image-section1">
                <div className="learn-more-content3">
                    <p>EXOPLANETS</p>
                    <p className='earth'>KEPLER-452b</p>
                    <button className="learn-more-button">
                        <h2>LEARN MORE</h2>
                    </button>
                </div>
                <div className="exoplanet-photo"></div>
            </div>
            </div>
    );
};


export default News;
