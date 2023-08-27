import { FlatList, Text } from "react-native";

import { Pokemon } from "@services/pokemon";
import { View } from "react-native";

type Props = {
  data: Pokemon[];
};

export function PokemonList({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}
