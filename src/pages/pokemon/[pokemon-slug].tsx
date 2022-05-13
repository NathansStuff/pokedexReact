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
  const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com';
  const location = useLocation().pathname;
  const id = location.split('/pokemon/')[1];
  const [pokemon, setPokemon] = useState<IndividualPokemon | null>(null);

  // on load, fetch pokemon data
  useEffect(() => {
    const fetchAllPokemon = async () => {
      await getData<IndividualPokemon>(`${url}/pokemon/${id}.json`).then(
        response => setPokemon(response)
      );
    };
    fetchAllPokemon();
  }, [id]);

  if (!pokemon) return <Loading />;
  const { name, image, stats, type } = pokemon;
  console.log(pokemon);
  return (
    <div className='flex flex-col space-y-2 justify-center items-center mt-10'>
      <div className='flex space-x-2'>
        <h1 className='text-xl md:text-2xl'>{name}</h1>
        <h1>#{id}</h1>
      </div>
      <div className='rounded p-5 flex items-center space-x-10 m-5 justify-center'>
        <img
          src={`${url}/${image}`}
          alt={`${name}`}
          className='w-60 h-60 object-cover'
        />
        <div>
          <h2 className='text-xl justify-center flex py-5'>Stats</h2>
          {stats.map(stat => (
            <div className='flex justify-between space-x-5'>
              <div>
                <p>{stat.name}</p>
              </div>
              <div>
                <p>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className='text-xl justify-center flex py-5'>Types</h2>
          <div>
            {type.map(each => (
              <div>
                <p>{each}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
