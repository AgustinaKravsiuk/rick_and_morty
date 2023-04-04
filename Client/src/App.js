import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'

function App () {
  const [characters, setCharacters] = useState ([]);
  const [access, setAccess] = useState(false);
  const  username = "prueba@prueba.com";
  const password = "p4ssw0rd";
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

function onSearch(character) {
  fetch(`http://localhost:3001/rickandmorty/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
          const existe = characters.map((char) => char.id === data.id)
          setCharacters((oldChars) => [...oldChars, data]);
          // guardar en allCharacter
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
};

function onClose(id){
  const filtered = characters.filter((character) => character.id !== Number(id));
  setCharacters(filtered);
};

function login(userData) {
  if(username === userData.username && password === userData.password) {
    setAccess(true);
    navigate("/home");
  } else {
    alert("Datos incorrectos")
  }
};

  return (
    <div className='App'>
      {location.pathname !== "/" ? <Nav onSearch={onSearch}/> : null}
      <Routes>
      <Route path='/' element={<Form login={login}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/home' element={
          <Cards
          characters={characters} onClose={onClose}
        />
        } />
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>     
    </div>
  )
}

export default App
