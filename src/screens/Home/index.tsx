import { useEffect } from "react";
import { StatusBar } from "react-native";

import { pokemonService } from "@services/pokemon";
import { Header } from "@screens/Home/components/Header";
import { PokemonList } from "@screens/Home/components/PokemonList";

import { Container, Content } from "./styles";
import { SkeletonLoading } from "./components/SkeletonLoading";

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
          <SkeletonLoading />
        ) : (
          <PokemonList data={data?.pokemon_v2_pokemon!} />
        )}
      </Content>
    </Container>
  );
}
