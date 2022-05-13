interface Pokemon {
 id: number
 name: string;
 image: string;
}

interface Type {
  type: string
}

export type IndividualPokemon = {
 name: string;
 type: Type[]
 stats: {
  name: string;
  value: number;
 }[]
 image: string;
}