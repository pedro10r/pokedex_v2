import { useEffect } from "react";
import { StatusBar } from "react-native";

import { pokemonService } from "@services/pokemon";
import { Header } from "@screens/Home/components/Header";
import { PokemonList } from "@screens/Home/components/PokemonList";

import { SkeletonLoading } from "./components/SkeletonLoading";
import { Container, Content } from "./styles";

export function Home() {
  const [fetchPokemons, { data, loading }] = pokemonService.usePokemons();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <Container
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 2000 }}
        >
          <StatusBar translucent barStyle="dark-content" />
          <Header />

          <Content>
            <PokemonList data={data?.pokemon_v2_pokemon!} />
          </Content>
        </Container>
      )}
    </>
  );
}
