import { FlatList } from "react-native";

import { Pokemon } from "@services/pokemon";
import { ItemList } from "@screens/Home/components/ItemList";

type Props = {
  data: Pokemon[];
};

export function PokemonList({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <ItemList item={item} />}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
}
