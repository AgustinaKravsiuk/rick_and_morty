import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react'

function App () {
  const [characters, setCharacters] = useState ([])
//   const example = {
//     name: 'Morty Smith',
//     species: 'Human',
//     gender: 'Male',
//     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//  };

function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
          console.log('soy el resultado de la buscqeurad', data.id)
          console.log('data que ya busqu[e> ', characters)
          const existe = characters.map((char) => char.id === data.id)
          console.log('existe_', existe)
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

function onClose(id){
  const filtered = characters.filter((character) => character.id !== Number(id));
  setCharacters(filtered)
}

  return (
    <div className='App'>
      <nav>
        <Nav onSearch={onSearch}></Nav>
      </nav>
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>

    </div>
  )
}

export default App
