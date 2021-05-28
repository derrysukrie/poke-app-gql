import { useState } from 'react';
import Modal from 'react-modal';

import Container from 'styled/container';
import Flex from 'styled/flex';
import Padded from 'styled/padded';
import Heading from 'styled/typhography/heading';
import Button from 'styled/buttons';
import Text from 'styled/typhography/text';
import InputSearch from 'styled/input-search';
import { getPokemonDetailQuery } from 'query/pokemon-detail/pokemon-detail.query';
import Loader from 'styled/loader/loader';

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

  const handleNickname = (e: any) => {
    setNickname(e.target.value);
  };

  if (pokemonDetailQuery.loading) return <Loader />;
  if (isLoading) return <Loader />;

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

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
      <Modal
        style={customStyles}
        isOpen={isShowModal}
        contentLabel="You got the Pokemon!!!"
      >
        <Text block align="center">
          You got the Pokemon!!!
        </Text>
        <Padded top="20px">
          <Text align="center" block>
            Enter your pokemon nickname
          </Text>
          <InputSearch onChange={handleNickname} nickname={nickname} />
          <Padded top="20px">
            <Flex>
              <Button outline height="32px" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Padded right="6px" left="6px" />
              <Button height="32px" onClick={savePokemon}>
                Submit
              </Button>
            </Flex>
          </Padded>
        </Padded>
      </Modal>
    </Container>
  );
}

export default PokemonDetail;
