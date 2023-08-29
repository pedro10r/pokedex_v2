import { useEffect } from "react";
import { StatusBar, Text } from "react-native";

import { pokemonService } from "@services/pokemon";
import { Header } from "@screens/Home/components/Header";
import { PokemonList } from "@screens/Home/components/PokemonList";

import { Container, Content } from "./styles";

export function Home() {
  const [fetchPokemons, { data, loading }] = pokemonService.usePokemons();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Container>
      <StatusBar translucent barStyle="dark-content" />
      <Header />

      <Content>
        {loading ? (
          <Text>Carregando lista</Text>
        ) : (
          <PokemonList data={data?.pokemon_v2_pokemon!} />
        )}
      </Content>
    </Container>
  );
}
