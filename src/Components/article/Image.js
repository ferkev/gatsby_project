import React from 'react';
import Img from "gatsby-image";
import PropsType from 'prop-types';

const Image = ({src, alt}) => {


  return (
    <>
      <Img 
      fluid={src} 
      alt={alt}
      style={{width: "100%", height: "190px"}}
      />
    </>
  )
}

Image.PropsType = {
  src: PropsType.string.isRequired,
  alt: PropsType.string.isRequired
}

export default Image
