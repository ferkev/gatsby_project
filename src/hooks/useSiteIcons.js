import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const Icons = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "free.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data.placeholderImage.childImageSharp.fluid)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}


export default Icons;