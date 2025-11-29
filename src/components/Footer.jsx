import React from 'react';
import { Link } from 'react-router-dom'; // Sử dụng Link nếu bạn muốn chuyển trang không reload

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-contact">
          Contact us: support@myshop.com | Phone: +61 123 456 789
        </p>
        <div className="footer-links">
          {/* Bạn có thể dùng thẻ <a> hoặc <Link> tuỳ nhu cầu */}
          <Link to="/terms">Terms & Conditions</Link>
          <span className="separator">|</span>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;