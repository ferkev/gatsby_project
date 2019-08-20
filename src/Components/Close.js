import React from 'react';
import close from '../svg/close.svg'

const style = {
  width: "30px",
}

const Close = () =>  {
  return (
    <img style={style} src={close} alt="cross"/>
  )
}

export default Close;