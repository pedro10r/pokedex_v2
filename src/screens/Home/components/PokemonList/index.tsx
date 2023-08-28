import { FlatList } from "react-native";

import { Pokemon } from "@services/pokemon";
import { Card } from "@screens/Home/components/Card";

type Props = {
  data: Pokemon[];
};

export function PokemonList({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <Card item={item} />}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
}
