/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Padded from 'styled/padded';
import Heading from 'styled/typhography/heading';

import PokemonCard from './_components/pokemon-card/pokemon-card';

function MyPokemon() {
  const myPokemon = JSON.parse(localStorage.getItem('pokemon')!) || [];
  const history = useHistory();

  return (
    <Padded left="20px" right="20px" top="20px">
      <Padded bottom="30px">
        <img
          style={{ cursor: 'pointer' }}
          src="/left-arrow.svg"
          width="25"
          alt="arrow"
          onClick={() => history.goBack()}
        />
      </Padded>
      <Heading weight="700" size={20}>
        My Pokemon List
      </Heading>
      <Padded top="20px">
        {React.Children.toArray(
          (myPokemon || []).map((pokemonData: any) => (
            <PokemonCard
              nickname={pokemonData.nickname ?? 'No data'}
              real_name={pokemonData.pokemon.name}
              moves={pokemonData.pokemon.moves}
              id={pokemonData.pokemon.id}
            />
          )),
        )}
      </Padded>
    </Padded>
  );
}

export default MyPokemon;
