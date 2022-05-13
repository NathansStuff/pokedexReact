import React from 'react'
import { useLocation } from 'react-router-dom';

export default function PokemonPage() {
 const location = useLocation().pathname
 const id = location.split('/pokemon/')[1];
 console.log(id)
 // const pokemon = 
  return (
    <div>[pokemon-slug]</div>
  )
}
