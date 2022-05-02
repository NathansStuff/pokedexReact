const pokemonData = {
  id: 132,
  name: 'ditto',
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  },
  weight: 40,
  height: 3,
  abilities: [
    {
      ability: {
        name: 'limber',
        url: 'https://pokeapi.co/api/v2/ability/7/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'imposter',
        url: 'https://pokeapi.co/api/v2/ability/150/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
  ],
};

export default pokemonData;
