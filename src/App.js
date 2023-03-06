import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters, { Rick } from './data.js'
import styles from './App.module.css'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className={styles.divCardApp}>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr className={styles.hrApp}/>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr className={styles.hrApp} />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
