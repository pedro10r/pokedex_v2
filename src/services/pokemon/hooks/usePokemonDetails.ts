import { gql, useLazyQuery } from "@apollo/client";
import { PokemonDetails } from "../types/pokemonDetails";

export const POKEMON_DETAILS_QUERY = gql`
  query PokemonDetails {
    pokemon_v2_pokemon_by_pk(id: 1) {
      height
      weight
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 } }
          order_by: { version_id: asc }
          limit: 1
        ) {
          flavor_text
        }
      }
    }
  }
`;

export default function usePokemonDetails(id: number) {
  return useLazyQuery<PokemonDetails>(POKEMON_DETAILS_QUERY, {
    fetchPolicy: "network-only",
    variables: { id },
  });
}
