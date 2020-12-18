import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h3>go home time</h3>
      </Link>
    </div>
  );
}

export default Header;
