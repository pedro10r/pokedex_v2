export function useUriPokemonImage(id: number) {
  const uriImagePng = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return uriImagePng;
}
