import { FlatList, Text } from "react-native";

import { Pokemon } from "@services/pokemon";
import { PokemonCard } from "@components/PokemonCard";

type Props = {
  data: Pokemon[];
};

export function PokemonList({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <PokemonCard item={item} />}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
}
