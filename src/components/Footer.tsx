import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://unsplash.com/photos/WVIkqpoKz1I"
        target="_blank"
        rel="noreferrer"
      >
        Photo by @swayte on Unsplash
      </a>
      <Link to="about">about</Link>
    </div>
  );
}

export default Footer;
