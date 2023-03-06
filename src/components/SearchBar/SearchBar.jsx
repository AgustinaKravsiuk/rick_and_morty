import { useRef } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   let searchID = useRef(null);
   return (
      <div className={styles.divSearchBar}>
         <input type='search' ref={searchID} className={styles.inputSearchBar}/>
         <button onClick={() => props.onSearch(searchID.current.value)} className={styles.buttonSearchBar}>Agregar</button>
      </div>
   );
}
