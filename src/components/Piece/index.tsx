import { ColorPalette } from "@hooks/usePokemonColor/types";

import { Container, Name } from "./styles";
import { PokemonType } from "@services/pokemon";
import { capitalize } from "@utils/capitalize";

type Props = {
  item: PokemonType;
  pallete: ColorPalette;
};

export function Piece({ item, pallete }: Props) {
  return (
    <Container backgroundColor={pallete.secondary}>
      <Name textColor={pallete.text}>
        {capitalize(item.pokemon_v2_type.name)}
      </Name>
    </Container>
  );
}
