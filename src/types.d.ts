interface Pokemon {
 name: string;
 url: string;

}

export interface AllPokemon {
 count: 1126,
 next: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20',
 previous: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
 count: number;
 next: string;
 previous: string;
 results: Pokemon[]
}

export type IndividualPokemon = {
 id: number;
 name: string;
 sprites: {
  front_default: string;
 }
types: {
   type: {
    name: string;
  }
 }[]}