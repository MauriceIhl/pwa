import { gql } from "@apollo/client"

export const PRODUCTS = gql`
 query Products {
    products {
      nodes {
        image {
          sourceUrl
        }
        name
        slug
        ... on SimpleProduct {
          id
          name
          image {
            sourceUrl
            altText
          }
          price
        }
        description
      }
    }
}
`

