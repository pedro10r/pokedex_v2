import { memo, useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";

import { Pokemon } from "@services/pokemon";
import { Colors } from "@hooks/usePokemonColor/types";
import { Card } from "@screens/Home/components/Card";
import { usePokemonColorPalette } from "@hooks/usePokemonColor";
import { useUriPokemonImage } from "@hooks/useUriPokemonImage";

type Props = {
  item: Pokemon;
};

function ItemListMemo({ item }: Props) {
  const navigation = useNavigation();

  const id = item.id;
  const name = item.name;
  const color = item.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor
    .name as Colors;
  const types = item.pokemon_v2_pokemontypes;

  const pallete = usePokemonColorPalette(color);
  const imageUri = useMemo(() => useUriPokemonImage(id), [id]);

  const handleOpenDetails = useCallback((id: number) => {
    navigation.navigate("Details", { id, name: item.name, pallete });
  }, []);

  return (
    <Card
      id={id}
      name={name}
      pallete={pallete}
      types={types}
      imageUri={imageUri}
      onPress={() => handleOpenDetails(id)}
    />
  );
}

export const ItemList = memo(ItemListMemo, (prevProps, nextProps) => {
  return nextProps.item.id === prevProps.item.id;
});
