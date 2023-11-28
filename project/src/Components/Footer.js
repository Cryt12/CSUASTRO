import React from 'react';
import '../Styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-media">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Youtube
          </a>
          <a href="#">Feedbacks</a>
        </div>
        <div className="footer-center">CSU-ASTRO @2023</div>
        <div className="contact-privacy">
          <div className="contacts">
            <a href="#">Contacts</a>
          </div>
          <div className="privacy-policy">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
