import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__inner">
        <p className="footer__brand">Little Lemon</p>
        <p className="footer__copy">
          © {new Date().getFullYear()} Little Lemon Chicago
        </p>
      </div>
    </footer>
  );
};

export default Footer;
