import { ColorPalette } from "@hooks/usePokemonColor/types";

import { Container, Name } from "./styles";
import { PokemonType } from "@services/pokemon";
import { capitalize } from "@utils/capitalize";

type Props = {
  item: PokemonType;
  palette: ColorPalette;
};

export function Piece({ item, palette }: Props) {
  return (
    <Container backgroundColor={palette.secondary}>
      <Name textColor={palette.text}>
        {capitalize(item.pokemon_v2_type.name)}
      </Name>
    </Container>
  );
}
