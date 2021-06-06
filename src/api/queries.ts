import { gql } from "graphql-request";

export const CREATE_PAGE_MUTATION = gql`
  mutation createPost($input: PostInput!) {
    createPost(input: $input) {
      id
      content
      title
    }
  }
`;

export const GET_PAGE_QUERY = `

`;
