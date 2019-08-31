import React from 'react';
import { image } from '../../hooks/useSiteIcons'
import Img from "gatsby-image";


const LinkedinImage = () => {

  const { image1 } = image();

  return <a href="https://www.linkedin.com/in/kevin-le-franc-082962158/"><Img 
    fluid={image1.childImageSharp.fluid}  
    placeholderStyle={{width: `50px`, height: `50px` }}
    alt="linkedin"
    />
    </a>
}

export default LinkedinImage;