import { useRef } from 'react';
import pokemonData from './pokemonData';
import Card from './components/Card';

function App() {
  const searchInput = useRef(null);
  return (
    <div className='flex w-full items-center flex-col bg-blue-900 min-h-screen space-y-5 pt-5'>
      <img
        src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
        width='300'
        alt='Pokemon Logo Png'
      />
      <input
        className='border-none outline-none p-5 w-[350px] mb-10 h-10'
        placeholder='Search'
        ref={searchInput}
      />
      <Card pokemon={pokemonData} />
    </div>
  );
}

export default App;
