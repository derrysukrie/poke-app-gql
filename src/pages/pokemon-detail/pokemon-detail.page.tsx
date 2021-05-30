import { useState } from 'react';
import { getPokemonDetailQuery } from 'query/pokemon-detail/pokemon-detail.query';

import Container from 'styled/container';
import Flex from 'styled/flex';
import Padded from 'styled/padded';
import Heading from 'styled/typhography/heading';
import Button from 'styled/buttons';
import Loader from 'styled/loader/loader';
import ModalPopUp from './_components/modal/modal';

function PokemonDetail() {
  const pokemonDetailQuery = getPokemonDetailQuery('ditto');

  const myPokemon = JSON.parse(localStorage.getItem('pokemon')!) || [];

  const [isShowModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [nickname, setNickname] = useState('');

  const savePokemon = () => {
    const pokemonData = {
      nickname,
      pokemon: 'ditto',
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
      } else {
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
      <Flex justify="space-between" align="center">
        <Heading weight="700" size={18}>
          {pokemonDetailQuery.data?.pokemon.name}
        </Heading>
        <Heading>#30</Heading>
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
      </Padded>
      <ModalPopUp isOpen={isShowModal} setShowModal={() => setShowModal(!isShowModal)} nickname={nickname} onChange={handleNickname} savePokemon={savePokemon} />
    </Container>
  );
}

export default PokemonDetail;
