import React from 'react';
import './formContact.css';
import { jsx } from '@emotion/core';
import Input from './input/input';


const labels = [
  {htmlFor: "user_email", text: "Your email :"}, 
  {htmlFor: "user_lastName", text: "Your lastname :"}, 
  {htmlFor: "user_firstName", text: "Your firstname :"}, 
  {htmlFor: "user_lastName", text: "Your phone :"}
];

const FormContact = () => {
  return (
    <form className="container_site">
      {
        labels.map((label, i) => {
          return <Input key={i} id={label.htmlFor} label={label.htmlFor} text={label.text} />
        })
      }
      <div>
        <label htmlFor="user_firstName">Your message : </label>
        <textarea style={{resize: "none" }} cols="50" rows="10"></textarea>
      </div>
      <div className="ValidationForm">
        <button type="reset">Cancel</button> 
        <button>Submit</button>
      </div>
    </form>
  )
}

export default FormContact