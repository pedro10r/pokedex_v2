import { gql, useLazyQuery } from "@apollo/client";
import { Pokemons } from "../types";

export const POKEMONS_QUERY = gql`
  query Pokemons {
    pokemon_v2_pokemon(limit: 905) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemoncolor {
          name
        }
      }
    }
  }
`;

export default function usePokemons() {
  return useLazyQuery<Pokemons>(POKEMONS_QUERY, {
    fetchPolicy: "network-only",
  });
}
