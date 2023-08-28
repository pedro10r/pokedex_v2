import { useEffect } from "react";
import { Text } from "react-native";

import { pokemonService } from "@services/pokemon";
import { Header } from "@components/Header";

import { Container, Content } from "./styles";
import { PokemonList } from "@components/PokemonList";

export function Home() {
  const [fetchPokemons, { data, loading }] = pokemonService.usePokemons();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Container>
      <Header hasBackButton={true} />
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
