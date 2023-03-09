import { useState } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const [character, setCharacter] = useState("")
   
   function handleInputChange(event) {
      setCharacter(event.target.value)
   }

   return (
      <div className={styles.divSearchBar}>
         <input type='search' className={styles.inputSearchBar} onChange={handleInputChange}/>
         <button onClick={() => props.onSearch(character)} className={styles.buttonSearchBar}>Agregar</button>
      </div>
   );
}
