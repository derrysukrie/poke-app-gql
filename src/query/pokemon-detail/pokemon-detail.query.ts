import { gql, useQuery } from '@apollo/client';

export const getPokemonDetailQuery = (name: string) => {
  const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        sprites {
          front_default
        }
        moves {
          move {
            name
          }
        }
        types {
          type {
            name
          }
        }
      }
    }
  `;

  const gqlVariables = {
    name,
  };

  const request = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  return request;
};
