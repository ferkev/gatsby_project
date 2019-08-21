import React,  { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Menu from './Menu'
import Close from './Close';
import './header.css';
import Image from '../hooks/useSiteIcons';

const Header = ( {sitetitle} ) => {

  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ activeClass, setActiveClass ] = useState("list_item_header");

  useEffect(() => {

    if (menuOpen) {
      setActiveClass("nav_list_active");
    }
    else {
      setActiveClass("nav_list");
    }

  })
  return (
    <header id="head" className="template_header">
      <nav>
        <div className="icon_active" onClick={() => setMenuOpen(!menuOpen)}>
          { menuOpen ? 
            <Close />   
            :
            <Menu />
          }
        </div>
        <ul className={activeClass}>
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