import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.png';
import SolarStorm from '../../img/News/solar_storm.jpg';
import '../../Styles/SolarStorm.css';

const SolarStormPage = () => {
    const navigate = useNavigate(); 

    const handleBackClick = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate('/default-route');
        }
    };

    const handleDebugNavigation = () => {
        try {
            handleBackClick();
        } catch (error) {
            console.error('Error navigating back:', error);
        }
    };

    return (
        <div className="learn-more-page">
            <div className="header-content">
                <img src={logo} alt="Logo" className="center-logo" />
                <button onClick={handleDebugNavigation} className="back-button">Back</button>
            </div>

            <div className="content">
                <img src={SolarStorm} alt="SolarStorm" className="solar-storm-image" />
                <h2 className="headline">Solar Storm</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan eu dolor pretium semper. Curabitur tempus pretium purus ut ultricies. Aliquam in nisl ut diam maximus accumsan. Nullam facilisis turpis ut malesuada tempor. Fusce quis lobortis neque. Curabitur et vulputate ante. In aliquet libero enim, in semper odio vehicula a. Donec ultricies molestie lectus, quis elementum ipsum lacinia eu. Duis et urna imperdiet, dictum nisi eget, sollicitudin lectus..</p>
                {}
            </div>
        </div>
    );
};

export default SolarStormPage;
