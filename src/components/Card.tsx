import { IndividualPokemon } from '../types';
import types from '../pokemonTypesImages';

type Props = {
  pokemon: IndividualPokemon;
};

export default function Card({ pokemon }: Props) {
  // Makes the first letter of a string capitalized
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const { id } = pokemon;
  const sprite = pokemon.sprites.front_default;
  const weight = pokemon.weight;
  const height = pokemon.height;
  const name = capitalizeFirstLetter(pokemon.name);

  return (
    <div className='w-full max-w-xs h-[500px] rounded p-5 bg-red-500 flex flex-col items-center space-y-2'>
      <div className='flex space-x-2'>
        <h1 className='text-xl md:text-2xl'>{name}</h1>
        <h1>#{id}</h1>
      </div>
      <img src={sprite} alt={`${name}`} className='w-60' />
      <div className='flex flex-row space-x-2'>
        <p>Types: </p>
        {pokemon.types.map((type, index) => {
          const typeName = type.type.name;
          return (
            <div className='flex flex-row space-x-2'>
              {/* @ts-ignore */}
              <img src={types[typeName]} alt={`${typeName}`} className='h-8' />
              <p key={index}>{capitalizeFirstLetter(type.type.name)}</p>
            </div>
          );
        })}
      </div>
      <div className='flex flex-row space-x-5'>
        <p>Weight: {weight}</p>
        <p>Height: {height}</p>
      </div>
      <div className='flex flex-col space-y-2'>
        {pokemon.abilities.map((ability, index) => (
          <p key={index}>
            Ability: {capitalizeFirstLetter(ability.ability.name)}
          </p>
        ))}
      </div>
    </div>
  );
}
