import { memo } from "react";

import { Pokemon } from "@services/pokemon";
import { Colors } from "@hooks/usePokemonColor/types";
import { Card } from "@screens/Home/components/Card";
import { usePokemonColorPalette } from "@hooks/usePokemonColor";
import { useUriPokemonImage } from "@hooks/useUriPokemonImage";

type Props = {
  item: Pokemon;
};

function ItemListMemo({ item }: Props) {
  const id = item.id;
  const name = item.name;
  const color = item.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor
    .name as Colors;
  const types = item.pokemon_v2_pokemontypes;

  const pallete = usePokemonColorPalette(color);
  const image = useUriPokemonImage(id);

  return (
    <Card
      id={id}
      name={name}
      pallete={pallete}
      types={types}
      imageUri={image}
    />
  );
}

export const ItemList = memo(ItemListMemo, (prevProps, nextProps) => {
  return nextProps.item.id === prevProps.item.id;
});
