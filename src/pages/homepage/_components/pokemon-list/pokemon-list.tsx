import pokemonListTransformers from 'transformers/pokemon-list.transformers';
import { useHistory } from 'react-router-dom';

import Card from 'styled/card';
import Flex from 'styled/flex';
import Text from 'styled/typhography/text';
import Padded from 'styled/padded';
import Button from 'styled/buttons';

type PokemonProps = {
  detail: ReturnType<typeof pokemonListTransformers>;
};

function PokemonList(props: PokemonProps) {
  const history = useHistory();

  const toDetailPokemonHandler = (pokemonName: string) => {
    history.push(`/detail?pokemon=${pokemonName}`);
  };

  return (
    <Padded bottom="20px">
      <Card>
        <Flex justify="space-between" align="center">
          <div>
            <img src={props.detail.image} alt="poke" width="60" />
          </div>
          <Text size={14} weight="700">
            {props.detail.name}
          </Text>
          <div>
            <Button
              onClick={() => toDetailPokemonHandler(props.detail.name)}
              height="20px"
            >
              Detail
            </Button>
          </div>
        </Flex>
      </Card>
    </Padded>
  );
}

export default PokemonList;
