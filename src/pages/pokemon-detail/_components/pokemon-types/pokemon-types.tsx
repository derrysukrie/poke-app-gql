import Flex from 'styled/flex';
import Padded from 'styled/padded';
import Text from 'styled/typhography/text';
import Badge from 'styled/badge';

type PokeTypeProps = {
  types: any;
};

function PokemonType(props: PokeTypeProps) {
  return (
    <Padded top="50px">
      <Text size={14} weight="700" customColor="#03ac0e">
        Types
      </Text>
      <Flex>
        {props.types.map((typeData: any) => (
          <Padded right="10px" top="10px">
            <Badge>
              <Text customColor="#03ac0e">{typeData.type.name}</Text>
            </Badge>
          </Padded>
        ))}
      </Flex>
    </Padded>
  );
}

export default PokemonType;
