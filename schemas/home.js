import { gql } from "@apollo/client"

export const HOME = gql`
  query Home {
    pageBy(uri: "/") {
      content
    }
  }
`