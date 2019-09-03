import { useStaticQuery, graphql } from "gatsby"

export const image = () => {

  const data = useStaticQuery(graphql`
    query {
      linkedin: file(relativePath: {eq: "linkedin.png"}){
        ...frgImage
      },
      twitter: file(relativePath: {eq: "twitter.png"}){
        ...frgImage
      },
      github: file(relativePath: {eq: "github.png"}){
        ...frgImage
      }
    }
  `)

  return data
}