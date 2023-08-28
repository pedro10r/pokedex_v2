import { Pokemon } from "@services/pokemon";
import { capitalize } from "@utils/capitalize";

import { usePokemonColorPalette } from "@hooks/usePokemonColor";
import { Colors } from "@hooks/usePokemonColor/types";

import {
  Container,
  PokeNumberContainer,
  Name,
  PokeNumber,
  ImageContainer,
  TypeArea,
  TypeContainer,
  TypeName,
  Image,
} from "./styles";
import useUriPokemonImage from "@hooks/useUriPokemonImage";

type Props = {
  item: Pokemon;
};

export function Card({ item }: Props) {
  const color = item.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor
    .name as Colors;

  const pallete = usePokemonColorPalette(color);
  const image = useUriPokemonImage(item.id);

  return (
    <Container backgroundColor={pallete.primary}>
      <PokeNumberContainer>
        <PokeNumber>#00{item.id}</PokeNumber>
      </PokeNumberContainer>

      <ImageContainer backgroundColor={pallete.secondary}>
        <Image resizeMode="contain" source={{ uri: image }} />
      </ImageContainer>

      <Name textColor={pallete.text}>{capitalize(item.name)}</Name>

      <TypeArea>
        {!!item.pokemon_v2_pokemontypes.length &&
          item.pokemon_v2_pokemontypes.map((item, index) => (
            <TypeContainer
              key={`${item.type_id}_${index}`}
              backgroundColor={pallete.secondary}
            >
              <TypeName textColor={pallete.text}>
                {capitalize(item.pokemon_v2_type.name)}
              </TypeName>
            </TypeContainer>
          ))}
      </TypeArea>
    </Container>
  );
}
