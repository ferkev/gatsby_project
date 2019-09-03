import React from 'react';
import Img from "gatsby-image";
import PropsType from 'prop-types';

const LinkedinImage = ({image, style}) => {

  return (
    <a href="https://www.linkedin.com/in/kevin-le-franc-082962158/">
      <Img 
      fluid={image}  
      placeholderStyle={style}
      alt="linkedin"
      />
    </a>
  )
}

LinkedinImage.PropsType = {
  image: PropsType.string.isRequired,
  style: PropsType.object.isRequired
}

export default LinkedinImage;