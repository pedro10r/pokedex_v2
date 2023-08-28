import { Pokemon } from "@services/pokemon";
import { capitalizeFirstLetter } from "@utils/capitalize";

import {
  Container,
  PokeNumberContainer,
  Name,
  PokeNumber,
  ImageContainer,
  TypeArea,
  TypeContainer,
  TypeName,
} from "./styles";

type Props = {
  item: Pokemon;
};

export function PokemonCard({ item }: Props) {
  return (
    <Container>
      <PokeNumberContainer>
        <PokeNumber>#00{item.id}</PokeNumber>
      </PokeNumberContainer>

      <ImageContainer />

      <Name>{capitalizeFirstLetter(item.name)}</Name>

      <TypeArea>
        {!!item.pokemon_v2_pokemontypes.length &&
          item.pokemon_v2_pokemontypes.map((item, index) => (
            <TypeContainer key={`${item.type_id}_${index}`}>
              <TypeName>
                {capitalizeFirstLetter(item.pokemon_v2_type.name)}
              </TypeName>
            </TypeContainer>
          ))}
      </TypeArea>
    </Container>
  );
}
