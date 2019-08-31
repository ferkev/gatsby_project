import React from 'react';
import { image } from '../../hooks/useSiteIcons'
import Img from "gatsby-image";


const TwitterImage = () => {

  const { image2 } = image();

  return <a href="https://twitter.com/"><Img 
    fluid={image2.childImageSharp.fluid}  
    placeholderStyle={{width: `50px`, height: `50px` }}
    alt="twitter"
    />
    </a>
}

export default TwitterImage;