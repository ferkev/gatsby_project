import React from './node_modules/react';
import Img from "./node_modules/gatsby-image";
import PropsType from './node_modules/prop-types'

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