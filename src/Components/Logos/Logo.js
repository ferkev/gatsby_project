import React from 'react';
import { image } from '../../hooks/useSiteIcons'
import LinkedinImage from './LinkedinImage';
import TwitterImage from "./TwitterImage"
import GithubImage from "./GithubImage";

const Logo = () => {

  const { linkedin, twitter, github } = image();
  
  const style = {
    width: `50px`, 
    height: `50px` 
  }

  const divStyle = { 
    display: "flex", 
    flexDirection: "row",
    marginLeft: "auto" 
  };

  const logoDivStyle ={
    margin: "0 .25rem", 
    width: "30px", 
    height: "30px"
  };

  return (
    <div 
    style={divStyle}>
      <div 
      style={logoDivStyle}>
        <LinkedinImage image={linkedin.childImageSharp.fluid} style={style} />
      </div>
      <div 
      style={logoDivStyle}>
        <TwitterImage image={twitter.childImageSharp.fluid} style={style} /> 
      </div>
      <div 
      style={logoDivStyle}>
        <GithubImage image={github.childImageSharp.fluid} style={style} /> 
      </div>
    </div>
  )
}

export default Logo;