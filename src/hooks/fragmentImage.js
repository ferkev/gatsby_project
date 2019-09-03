import { graphql } from 'gatsby';

export const frgImage =  graphql`
  fragment frgImage on File {
    childImageSharp {
      fluid(maxWidth: 1080) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;