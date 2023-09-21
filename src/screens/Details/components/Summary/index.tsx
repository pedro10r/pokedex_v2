import { PokemonDetails } from "@services/pokemon";
import { Container } from "./styles";

type Props = {
  data: PokemonDetails | undefined;
};

export function Summary({ data }: Props) {
  return <Container></Container>;
}
