/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { getPokemonDetailQuery } from 'query/pokemon-detail/pokemon-detail.query';

import Container from 'styled/container';
import Flex from 'styled/flex';
import Text from 'styled/typhography/text';
import Padded from 'styled/padded';
import Heading from 'styled/typhography/heading';
import Button from 'styled/buttons';
import Loader from 'styled/loader/loader';
import ModalPopUp from './_components/modal/modal';
import PokemonType from './_components/pokemon-types/pokemon-types';

interface CustomState {
  pokemon: string;
}

function PokemonDetail() {
  const { search } = useLocation();
  const history = useHistory();
  const parsedPokemonName = queryString.parse(search);

  const pokemonName = parsedPokemonName as unknown as CustomState;
  const pokemonDetailQuery = getPokemonDetailQuery(pokemonName.pokemon);

  const myPokemon = JSON.parse(localStorage.getItem('pokemon')!) || [];

  const [isShowModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [nickname, setNickname] = useState('');
  const [isShowFailed, setShowFailed] = useState(false);

  const savePokemon = () => {
    const pokemonData = {
      nickname,
      pokemon: pokemonDetailQuery.data.pokemon,
    };
    myPokemon.push(pokemonData);
    localStorage.setItem('pokemon', JSON.stringify(myPokemon));
    setShowModal(false);
    window.location.reload();
  };

  const catchPokemon = () => {
    setLoading(true);
    setTimeout(() => {
      const number = Math.floor(Math.random() * 10) + 1;
      if (number > 5) {
        setLoading(false);
        setShowModal(true);
        setShowFailed(false);
      } else {
        setShowFailed(true);
        setLoading(false);
      }
    }, 3000);
  };

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  if (pokemonDetailQuery.loading) return <Loader />;
  if (isLoading) return <Loader />;

  return (
    <Container>
      <Padded bottom="30px">
        <img
          style={{ cursor: 'pointer' }}
          src="/left-arrow.svg"
          width="25"
          alt="arrow"
          onClick={() => history.goBack()}
        />
      </Padded>
      <Flex justify="space-between" align="center">
        <Heading weight="700" size={18}>
          {pokemonDetailQuery.data?.pokemon.name}
        </Heading>
        <Heading>
          #
          {pokemonDetailQuery.data?.pokemon.id}
        </Heading>
      </Flex>
      <Padded top="20px">
        <Flex justify="center">
          <img
            src={pokemonDetailQuery.data?.pokemon?.sprites.front_default}
            alt="..."
            width="200"
            style={{ textAlign: 'center' }}
          />
        </Flex>
        <Flex justify="center">
          <Button onClick={catchPokemon}>Catch Pokemon</Button>
        </Flex>
        {isShowFailed && (
          <Padded top="20px">
            <Flex justify="center">
              <Text customColor="red">
                Failed to catch pokemon, try again!!!
              </Text>
            </Flex>
          </Padded>
        )}
        <PokemonType types={pokemonDetailQuery.data?.pokemon?.types} />
      </Padded>
      <ModalPopUp
        isOpen={isShowModal}
        setShowModal={() => setShowModal(!isShowModal)}
        nickname={nickname}
        onChange={handleNickname}
        savePokemon={savePokemon}
      />
    </Container>
  );
}

export default PokemonDetail;
