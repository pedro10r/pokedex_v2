type PokemonAbilities = {
  pokemon_v2_ability: {
    name: string;
  };
};

type PokemonStats = {
  pokemon_v2_stat: {
    name: string;
  };
  base_stat: number;
};

export type FlavorText = {
  pokemon_v2_pokemonspeciesflavortexts: {
    flavor_text: string;
  };
};

export type PokemonDetails = {
  height: number;
  weight: number;
  pokemon_v2_pokemonabilities: PokemonAbilities;
  pokemon_v2_pokemonstats: PokemonStats;
  pokemon_v2_pokemonspecy: FlavorText;
};
