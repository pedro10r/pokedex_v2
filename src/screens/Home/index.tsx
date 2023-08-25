import { useEffect } from "react";
import { pokemonService } from "../../services/pokemon";
import { Container, Content, Title } from "./styles";
import { Header } from "../../components/Header";
import { ScrollView } from "react-native";

export function Home() {
  const [fetchPokemons, { data }] = pokemonService.usePokemons();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Container>
      <Header />
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
