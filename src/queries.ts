import { gql } from "@urql/svelte";

export const ALL_PEOPLE_QUERY = gql`
  query AllPeople($limit: Int!, $after: String) {
    allPeople(first: $limit, after: $after) {
      people {
        id
        name
        birthYear
        homeworld {
          name
        }
      }
    }
  }
`;
