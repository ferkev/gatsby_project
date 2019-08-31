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
      linkedin: file(relativePath: {eq: "linkedin.png"}){
        ...frgLogo
      },
      twitter: file(relativePath: {eq: "twitter.png"}){
        ...frgLogo
      },
      github: file(relativePath: {eq: "github.png"}){
        ...frgLogo
      }
    }
  `)

  return data
}