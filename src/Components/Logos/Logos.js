import React from 'react';
import LinkedinImage from './LinkedinImage';
import TwitterImage from "./TwitterImage"
import GithubImage from "./GithubImage";

const Logo = () => {

  return(
  <div 
  style={{ display: "flex", flexDirection: "row",marginLeft: "auto" }}>
    <div 
    style={{margin: "0 .25rem", width: "30px", height: "30px"}}>
      <LinkedinImage />
    </div>
    <div 
      style={{margin: "0 .25rem", width: "30px", height: "30px"}}>
      <TwitterImage /> 
    </div>
    <div style={{margin: "0 .25rem", width: "30px", height: "30px"}}>
      <GithubImage /> 
    </div>
  </div>
  )
}

export default Logo;