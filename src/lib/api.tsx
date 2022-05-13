// Types
import { IndividualPokemon, Pokemon } from '../types/pokemonTypes';
// Helpers
import { getData } from '../utils/helper';

export const baseUrl = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com/';

export async function fetchAllPokemon(): Promise<Pokemon[]> {
  const url = `${baseUrl}/index.json`;
  console.log('running')
  return await getData<Pokemon[]>(url);
}

export async function fetchPokemonDetails(pokemonUrl: string) {
  const url = `${baseUrl}/${pokemonUrl}`;
  const data = await getData<IndividualPokemon>(url);
  return data;
}
