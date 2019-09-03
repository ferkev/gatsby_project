import React from 'react';
import Img from "gatsby-image";
import PropsType from 'prop-types';

const GithubImage = ({image, style}) => {

  return (
    <a href="https://github.com/ferkev">
      <Img 
      fluid={image}  
      placeholderStyle={style}
      alt="github"
      />
    </a>
  )
}

GithubImage.PropsType = {
  image: PropsType.string.isRequired,
  style: PropsType.object.isRequired
}

export default GithubImage;