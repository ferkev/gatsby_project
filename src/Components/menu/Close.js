import React from 'react';
import cancel from '../../svg/cancel.svg'

const style = {
  width: "1.25rem",
  height: "1.25rem"
}

const Close = () =>  {
  return (
    <img style={style} src={cancel} alt="cross"/>
  )
}

export default Close;