import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
      return (
      <div className={styles.divCard}>
         <div className={styles.buttonCardContainer}>
            <button onClick={props.onClose} className={styles.buttonCard}>X</button>
         </div>
         <Link to={`/detail/${props.id}`} >
            <h2 className={styles.nameCard}>{props.name}</h2>
         </Link>
         <img  src={props.image} alt="character-imagen" className={styles.characterImagenCard}/>
         <div className={styles.speciesGenderCard}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}
