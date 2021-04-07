import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import useTime from '../hooks/useMyState';

function Header() {
  const { time, msg } = useTime();

  return (
    <div className="header">
      <Link
        to={`/${time}${
          msg.length > 1
            ? `?m=${Buffer.from(msg, 'utf-8').toString('base64')}`
            : ''
        }`}
      >
        <h3>go home time</h3>
      </Link>
    </div>
  );
}

export default Header;
