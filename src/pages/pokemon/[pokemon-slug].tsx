// React
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
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

  return (
    <div className='flex flex-col  w-full  items-center bg-blue-900 min-h-screen space-y-5'>
      <Navbar />
      <div className='bg-red-500'>
        <div className='flex space-x-2 w-full justify-center pt-5'>
          <h1 className='text-xl md:text-2xl'>{name}</h1>
          <h1>#{id}</h1>
        </div>
        <div className='rounded p-5 flex space-x-10 m-5 justify-center'>
          <img
            src={`${url}/${image}`}
            alt={`${name}`}
            className='w-60 h-60 object-cover'
          />
          <div>
            <h2 className='text-xl justify-center flex pb-5'>Stats</h2>
            {stats.map((stat, index) => (
              <div className='flex justify-between space-x-5' key={index}>
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
            <h2 className='text-xl justify-center flex pb-5'>Types</h2>
            <div>
              {type.map((each, index) => (
                <div key={index}>
                  <p>{each}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
