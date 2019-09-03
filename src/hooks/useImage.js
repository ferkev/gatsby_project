import { useStaticQuery, graphql } from 'gatsby';

export const projectImage = () => {
  const data = useStaticQuery(graphql`
    query {
      folhomee: file(relativePath: {eq: "folhomee.png"}){
        ...frgImage
      },
      mayak: file(relativePath: {eq: "mayak.png"}){
        ...frgImage
      },
      benext: file(relativePath: {eq: "benext.png"}){
        ...frgImage
      }
    }
  `)
  
  return data;
}

export default projectImage;