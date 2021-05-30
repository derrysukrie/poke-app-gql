/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { gql, useQuery } from '@apollo/client';
import pokemonListTransformers from 'transformers/pokemon-list.transformers';
import { useHistory } from 'react-router-dom';

import Container from 'styled/container';
import Heading from 'styled/typhography/heading';
import Flex from 'styled/flex';
import Padded from 'styled/padded';
import Text from 'styled/typhography/text';
import Loader from 'styled/loader/loader';
import PokemonList from './_components/pokemon-list/pokemon-list';

function Homepage() {
  const myPokemon = JSON.parse(localStorage.getItem('pokemon')!) || [];
  const history = useHistory();

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

  if (loading) return <Loader />; // Change this later

  return (
    <Container>
      <Flex justify="space-between">
        <Heading weight="700" size={20}>
          What Pokemon are you looking for?
        </Heading>
        <div
          className="App-header"
          onClick={() => history.push('/pokemon')}
          role="button"
          tabIndex={0}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="/pokeball.svg"
            className="App-logo"
            width="50"
            alt="arrow"
          />
        </div>
      </Flex>
      <Padded top="50px" bottom="20px">
        <Flex justify="space-between">
          <Text size={14}>Poke List</Text>
          <Heading>
            Owned #
            {myPokemon.length ?? 0}
          </Heading>
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
