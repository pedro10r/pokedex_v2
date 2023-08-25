import { useEffect } from "react";
import { pokemonService } from "../../services/pokemon";
import { Container, Title } from "./styles";
import { Header } from "../../components/Header";

export function Home() {
  const [fetchPokemons, { data }] = pokemonService.usePokemons();

  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log("AQUI >", JSON.stringify(data, null, 2));

  return (
    <Container>
      <Header />
      <Title>Hello word !!!</Title>
    </Container>
  );
}
