import Text from 'styled/typhography/text';
import Card from 'styled/card';
import Badge from 'styled/badge';
import Flex from 'styled/flex';
import Padded from 'styled/padded';
import Button from 'styled/buttons';

type PokemonProps = {
  real_name: string;
  nickname: string;
  moves: any;
  id: number;
};

function PokemonCard(props: PokemonProps) {
  const minifyType = props.moves.slice(0, 4);
  const myPokemon = JSON.parse(localStorage.getItem('pokemon')!) || [];

  const releasePokemon = () => {
    myPokemon.forEach((element: any, i: number) => {
      if (element.pokemon.id === props.id) myPokemon.splice(i, 1);
      localStorage.pokemon = JSON.stringify(myPokemon);
    });
    window.location.reload();
    // for (const [i, pokemonData] of myPokemon.entries()) {
    //   if (pokemonData.pokemon.id === props.id) myPokemon.splice(i, 1);
    //   localStorage.pokemon = JSON.stringify(myPokemon);
    // }
  };

  return (
    <Padded bottom="20px">
      <Card>
        <Text size={16} weight="600">
          {props.nickname}
        </Text>
        {'  '}
        /
        {'  '}
        <Text size={16} weight="600">
          {props.real_name}
        </Text>
        <Flex>
          {minifyType.map((type: any) => (
            <Padded right="10px" top="20px">
              <Badge>
                <Text customColor="#03ac0e">{type.move.name}</Text>
              </Badge>
            </Padded>
          ))}
        </Flex>
        <Padded top="20px">
          <Button height="30px" onClick={releasePokemon}>
            Release Pokemon
          </Button>
        </Padded>
      </Card>
    </Padded>
  );
}

export default PokemonCard;
