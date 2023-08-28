import { memo } from "react";

import { ColorPalette } from "@hooks/usePokemonColor/types";
import { PokemonType } from "@services/pokemon";
import { capitalize } from "@utils/capitalize";

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

type Props = {
  id: number;
  name: string;
  pallete: ColorPalette;
  types: PokemonType[];
  imageUri: string;
};

function CardMemo({ id, name, pallete, types, imageUri }: Props) {
  return (
    <Container backgroundColor={pallete.primary}>
      <PokeNumberContainer>
        <PokeNumber>#00{id}</PokeNumber>
      </PokeNumberContainer>

      <ImageContainer backgroundColor={pallete.secondary}>
        <Image resizeMode="contain" source={{ uri: imageUri }} />
      </ImageContainer>

      <Name textColor={pallete.text}>{capitalize(name)}</Name>

      <TypeArea>
        {!!types.length &&
          types.map((item, index) => (
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

export const Card = memo(CardMemo, (prevProps, nextProps) => {
  return nextProps.id === prevProps.id;
});
