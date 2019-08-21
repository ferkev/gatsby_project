import React from 'react';
import './formContact.css';
import { jsx } from '@emotion/core';

const FormContact = () => {
  return (
    <form className="container_site">
      <div>
        <label htmlFor="user_email">Your email : </label>
        <input id="user_email" type="text"/>
      </div>
      <div>
        <label htmlFor="user_lastName">Your lastname : </label>
        <input id="user_lastName" type="text"/>
      </div>
      <div>
        <label htmlFor="user_firstName">Your firstname : </label>
        <input id="user_firstName" type="text"/>
      </div>
      <div>
        <label htmlFor="user_lastName">Your phone : </label>
        <input id="user_lastName" type="text"/>
      </div>
      <div>
        <label htmlFor="user_firstName">Your message : </label>
        <textarea style={{resize: "none" }} cols="50" rows="10"></textarea>
      </div>
      <div>
        <button>Cancel></button> 
        <button>Submit</button>
      </div>
      <div style={{width: "100%"}}>
      </div>
    </form>
  )
}

export default FormContact