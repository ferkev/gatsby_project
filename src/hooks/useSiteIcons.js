import React from "react";
import { useStaticQuery, graphql } from "gatsby"


export const frgLogo =  graphql`
  fragment frgLogo on File {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }`

export const image = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: {eq: "linkedin.png"}){
        ...frgLogo
      },
      image2: file(relativePath: {eq: "twitter.png"}){
        ...frgLogo
      },
      image3: file(relativePath: {eq: "github.png"}){
        ...frgLogo
      }
    }
  `)

  return data
}