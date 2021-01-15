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

export const PERSON_DETAILS_QUERY = gql`
  query($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      gender
      height
      homeworld {
        name
        population
      }
      species {
        name
        classification
      }
    }
  }
`;
