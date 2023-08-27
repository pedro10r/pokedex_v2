import { useEffect } from "react";
import { ScrollView } from "react-native";

import { pokemonService } from "@services/pokemon";
import { Header } from "@components/Header";

import { Container, Content, Title } from "./styles";

export function Home() {
  const [fetchPokemons, { data }] = pokemonService.usePokemons();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Container>
      <Header hasBackButton={true} />
      <Content>
        <ScrollView>
          {!!data?.pokemon_v2_pokemon &&
            data.pokemon_v2_pokemon.length &&
            data.pokemon_v2_pokemon.map((item, index) => (
              <Title key={`${item.id}_${index}`}>{item.name}</Title>
            ))}
        </ScrollView>
      </Content>
    </Container>
  );
}
