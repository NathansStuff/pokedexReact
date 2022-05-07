import { useEffect, useRef, useState } from 'react';
import Card from './components/Card';
import logo from './assets/logo.png';
import { Pokemon } from './types';
import { getData } from './utils/helper';

function App() {
  const searchInput = useRef(null);
  const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);

  // on load, fetch all pokemon
  useEffect(() => {
    const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json';
    const fetchAllPokemon = async () => {
      const data = await getData<Pokemon[]>(url);
      setPokemon(data);
    };
    fetchAllPokemon();
  });

  if (!pokemon) {
    return <div>Loading</div>;
  }

  // console.log(pokemon)

  return (
    <div className='flex w-full items-center flex-col bg-blue-900 min-h-screen space-y-5 pt-5'>
      <img src={logo} width='300' alt='Pokemon Logo' />
      <input
        className='border-none outline-none p-5 w-[350px] mb-10 h-10'
        placeholder='Search'
        ref={searchInput}
      />
      <div className='flex flex-wrap items-center justify-center'>
        {pokemon.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
