import React from './node_modules/react';
import Img from "./node_modules/gatsby-image";
import PropsType from './node_modules/prop-types';

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