import { gql, useQuery } from '@apollo/client';
import pokemonListTransformers from 'transformers/pokemon-list.transformers';

import Container from 'styled/container';
import Heading from 'styled/typhography/heading';
import Flex from 'styled/flex';
import Padded from 'styled/padded';
import Text from 'styled/typhography/text';
import PokemonList from './_components/pokemon-list/pokemon-list';

function Homepage() {
  const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
          url
          name
          image
        }
      }
    }
  `;

  const gqlVariables = {
    limit: 20,
    offset: 1,
  };

  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return null; // Change this later

  return (
    <Container>
      <Flex justify="space-between">
        <Heading size={18}>What Pokemon are you looking for?</Heading>
        <Heading>awdaw</Heading>
      </Flex>
      <Padded top="20px">
        <Flex justify="space-between">
          <Text size={14}>Poke List</Text>
          <Heading>awdaw</Heading>
        </Flex>
      </Padded>
      <Padded>
        {(data?.pokemons.results ?? []).map((pokemon: {}) => (
          <div>
            <PokemonList detail={pokemonListTransformers(pokemon)} />
          </div>
        ))}
      </Padded>
    </Container>
  );
}

export default Homepage;
