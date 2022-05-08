import { ChangeEvent, useEffect, useState } from 'react';
import Card from './components/Card';
import logo from './assets/logo.png';
import { Pokemon } from './types/pokemonTypes';
import { getData } from './utils/helper';

function App() {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[] | null>(
    null
  );

  // on load, fetch all pokemon
  useEffect(() => {
    const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json';
    const fetchAllPokemon = async () => {
      await getData<Pokemon[]>(url).then(response => setPokemon(response));
    };
    fetchAllPokemon();
  },[]);

  // Refresh the data on search
  useEffect(() => {
    if (!pokemon) {
      return;
    }
    const newFilteredPokemon = pokemon!.filter(eachPokemon => {
      return eachPokemon.name.toLocaleLowerCase().includes(search);
    });
    setFilteredPokemon(newFilteredPokemon);
  }, [search, pokemon]);

  // Return loading state initially
  if (!pokemon) {
    return <div>Loading</div>;
  }

  // Search filter
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearch(searchFieldString);
  };

  return (
    <div className='flex w-full items-center flex-col bg-blue-900 min-h-screen space-y-5 pt-5'>
      <img src={logo} width='300' alt='Pokemon Logo' />
      <input
        className='border-none outline-none p-5 w-[350px] mb-10 h-10'
        placeholder='Search'
        type='search'
        onChange={onSearchChange}
      />
      <div className='flex flex-wrap items-center justify-center'>
        {filteredPokemon?.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
