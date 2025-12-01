import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-contact">
          Contact us: support@myshop.com | Phone: +61 123 456 789
        </p>
        <div className="footer-links">
          <Link to="/terms">Terms & Conditions</Link>
          <span className="separator">|</span>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
