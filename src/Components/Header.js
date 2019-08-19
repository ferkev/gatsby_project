import React from 'react';
import { Link } from 'gatsby';

const Header = ( {sitetitle} ) => {
  return (
    <nav>
      <ul>
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
  )
}

export default Header;