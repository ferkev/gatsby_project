import React,  { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled  from '@emotion/styled';

import Menu from '../menu/Menu'
import Close from '../menu/Close';


const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  height: 3rem;
`

const BurgerIcon = styled.div`
  &.icon_active {
    display: none;
  
    @media (max-width: 850px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
    }
  }
`

const List = styled.ul`

  @media (max-width: 850px) {
    &.nav_list {
      display: none;
    }

    &.nav_list_active {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: #005aa7;
      position: absolute;
      top: 100%;
      left: 0%;
      box-shadow: 0 0 1px #000000;
      
      a {
        height: 1.5rem;
      }

      a:hover {
        border-bottom: 2px solid #ffffff;
      }

      li {
        padding: 0 1rem;
      }
    }
  } 
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  height: 1.5rem;
`

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
    <header 
      css={css`
        background: #005aa7;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
      `}
    >
      <nav 
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        `}
      >
        <BurgerIcon className="icon_active" onClick={() => setMenuOpen(!menuOpen)}>
          { menuOpen ? 
            <Close />   
            :
            <Menu />
          }
        </BurgerIcon>
        <List className={activeClass}>
          <ListItem>
            <NavLink to="/">{sitetitle}</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/About">About</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/Contact">Contact</NavLink>
          </ListItem>
        </List>
      </nav>
    </header>
  )
}

export default Header;

// .nav_list_active li a {
//   height: 1.5rem;
// }