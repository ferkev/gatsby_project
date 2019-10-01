import React from 'react';
import Propstype from 'prop-types'


const Input = ({id, label, text}) => {
  return (
    <div>
      <label htmlFor={label}>{text}</label>
      <input id={id} type="text"/>
    </div>
  )
}

Input.Propstype = {
  id: Propstype.string.isRequired,
  label: Propstype.string.isRequired,
  text: Propstype.string.isRequired
}

export default Input;