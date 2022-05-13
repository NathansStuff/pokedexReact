// Helpers
import { capitalizeFirstLetter } from '../utils/helper';
// Types
import { Pokemon } from '../types/pokemonTypes';

type Props = {
  pokemon: Pokemon;
};

export default function Card({ pokemon }: Props) {
  const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com';
  const { id, image } = pokemon;
  const name = capitalizeFirstLetter(pokemon.name);

  return (
    <div className='rounded p-5 bg-red-500 flex flex-col items-center space-y-2 m-5'>
      <div className='flex space-x-2'>
        <h1 className='text-xl md:text-2xl'>{name}</h1>
        <h1>#{id}</h1>
      </div>
      <img
        src={`${url}/${image}`}
        alt={`${name}`}
        className='w-60 h-60 object-cover'
      />
    </div>
  );
}
