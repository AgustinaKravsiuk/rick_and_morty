import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'

function App () {
  const [characters, setCharacters] = useState ([])

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
      <Nav onSearch={onSearch}></Nav>
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/home' element={
          <Cards
          characters={characters} onClose={onClose}
        />
        } />
        <Route path='/detail/:detailId' element={<Detail/>} />
      </Routes>     
    </div>
  )
}

export default App
