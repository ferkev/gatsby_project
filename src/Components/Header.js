import React from 'react';
import { Link } from 'gatsby';
import './header.css';

const Header = ( {sitetitle} ) => {
  return (
    <header className="template_header">
      <nav>
        <ul className="nav_list">
          <li>
            <Link to="/">{sitetitle}</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;