import { Pokemon } from '../types/pokemonTypes';
import { getData } from '../utils/helper';

export async function fetchAllPokemon() {
  const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json';
  const data = await getData<Pokemon[]>(url);
  return data;
}

export const imageUrl = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com/'