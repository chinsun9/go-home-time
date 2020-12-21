import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import useTime from '../hooks/useMyState';

function Header() {
  const { time } = useTime();

  return (
    <div className="header">
      <Link to={`/${time}`}>
        <h3>go home time</h3>
      </Link>
    </div>
  );
}

export default Header;
