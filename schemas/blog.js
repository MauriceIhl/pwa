import { gql } from "@apollo/client"

export const BLOGS = gql`
  query Blogs {
    posts {
        nodes {
            content
            slug
            uri
            title
            excerpt
            id
        }
    }
}
`