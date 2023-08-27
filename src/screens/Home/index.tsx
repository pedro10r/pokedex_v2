import { useEffect } from "react";
import { ScrollView } from "react-native";

import { pokemonService } from "@services/pokemon";
import { Header } from "@components/Header";

import { Container, Content, Title } from "./styles";
import { PokemonList } from "@components/PokemonList";

export function Home() {
  const [fetchPokemons, { data }] = pokemonService.usePokemons();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Container>
      <Header hasBackButton={true} />
      <Content>
        <PokemonList data={data?.pokemon_v2_pokemon!} />
      </Content>
    </Container>
  );
}
