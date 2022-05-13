// React
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Loading from '../../components/Loading';
// Helpers
import { getData } from '../../utils/helper';
// Types
import { IndividualPokemon } from '../../types/pokemonTypes';

export default function PokemonPage() {
  const location = useLocation().pathname;
  const id = location.split('/pokemon/')[1];
  const [pokemon, setPokemon] = useState<IndividualPokemon | null>(null);

  // on load, fetch pokemon data
  useEffect(() => {
    const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com';
    const fetchAllPokemon = async () => {
      await getData<IndividualPokemon>(`${url}/pokemon/${id}.json`).then(
        response => setPokemon(response)
      );
    };
    fetchAllPokemon();
  }, [id]);

  if (!pokemon) return <Loading />;

  return <div>{pokemon.name}</div>;
}
