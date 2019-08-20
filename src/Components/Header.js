import React,  { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './header.css';
import Menu from './Menu'
import Close from './Close';

const Header = ( {sitetitle} ) => {

  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ activeClass, setActiveClass ] = useState("list_item_header");

  useEffect(() => {
    if (menuOpen) {
      setActiveClass("list_item_header_active")
    }
    else {
      setActiveClass("list_item_header")
    } 
  })

  return (
    <header className="template_header">
      <div onClick={() => setMenuOpen(!menuOpen)}>
        { menuOpen ? 
          <Close />
          :
          <Menu />     
        }
      </div>
      <nav>
        <ul className="nav_list">
          <li className={activeClass}>
            <Link to="/">{sitetitle}</Link>
          </li>
          <li className={activeClass}>
            <Link to="/About">About</Link>
          </li>
          <li className={activeClass}>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;