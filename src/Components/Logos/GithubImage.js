import React from './node_modules/react';
import Img from "./node_modules/gatsby-image";
import PropsType from './node_modules/prop-types';

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