import pokemonListTransformers from 'transformers/pokemon-list.transformers';

import Card from 'styled/card';
import Flex from 'styled/flex';
import Text from 'styled/typhography/text';

type PokemonProps = {
  detail: ReturnType<typeof pokemonListTransformers>;
};

function PokemonList(props: PokemonProps) {
  console.log(props.detail);
  return (
    <div>
      <Card>
        <Flex justify="space-between" align="center">
          <div>
            <img src={props.detail.image} alt="poke" width="60" />
          </div>
          <Text size={14} weight="700">
            {props.detail.name}
          </Text>
          <div>
            <button type="button">awdaw</button>
          </div>
        </Flex>
      </Card>
    </div>
  );
}

export default PokemonList;
