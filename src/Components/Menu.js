import React from 'react';
import menu from '../svg/menu.svg';

const style = {
  width: "1.5rem",
  height: "1.5rem",
  transform: "rotate(180deg) scaleY(-1)",
}

const Menu = () => {
  return (
    <img style={style} src={menu} alt="menu"/>
  )
}

export default Menu;