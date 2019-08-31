import React from 'react';
import { image } from '../../hooks/useSiteIcons'
import Img from "gatsby-image";


const GithubImage = () => {

  const { image3 } = image();

  return <a href="https://github.com/ferkev"><Img 
    fluid={image3.childImageSharp.fluid}  
    placeholderStyle={{width: `50px`, height: `50px` }}
    alt="github"
    />
    </a>
}

export default GithubImage;