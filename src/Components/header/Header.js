import React,  { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled  from '@emotion/styled';
import PropsType from 'prop-types';
import Menu from '../Menu/menu';
import Close from '../Menu/close';
import Logo from "../Logos/logo";

const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  height: 3rem;
`;

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
`;

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
      background-color: #005aa7;
      position: absolute;
      top: 100%;
      width: 100%;
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
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  height: 1.5rem;
`

const Header = ( {sitetitle} ) => {

  // all state
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ activeClass, setActiveClass ] = useState("list_item_header");

  // all ref
  const headerRef = React.createRef();

  const FakeHeader = () => <div style={{height: "48px", width: "100%", display: "block"}}></div>

  useEffect(() => {
    menuOpen ? setActiveClass("nav_list_active") : setActiveClass("nav_list");
  })


  return (
    <>
    <header ref={headerRef}
      id="head"
      css={css`
        background: #005aa7;
        z-index: 3000;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        @media (max-width: 850px) {
        ul {
          display: none;
        }
      }
      `}
    >
      <nav 
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
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
            <NavLink to="/About/">About</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/Contact/">Contact</NavLink>
          </ListItem>
        </List>
        <Logo />
      </nav>
    </header>
      <FakeHeader />
    </>
  )
}

Header.PropsType = {
  sitetitle: PropsType.string.isRequired,
}

export default Header;