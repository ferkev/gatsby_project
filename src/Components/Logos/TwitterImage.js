import React from 'react';
import Img from "gatsby-image";
import PropsType from 'prop-types';

const TwitterImage = ({image, style}) => {

  return (
    <a href="https://twitter.com/">
      <Img 
      fluid={image}  
      placeholderStyle={style}
      alt="twitter"
      />
    </a>
  )
}

TwitterImage.PropsType = {
  image: PropsType.string.isRequired,
  style: PropsType.object.isRequired
}

export default TwitterImage;