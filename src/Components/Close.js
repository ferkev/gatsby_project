import React from 'react';
import cancel from '../svg/cancel.svg'

const style = {
  width: "30px",
}

const Close = () =>  {
  return (
    <img style={style} src={cancel} alt="cross"/>
  )
}

export default Close;