import styles from './Card.module.css'

export default function Card({name, species, image, gender, onClose}) {
      return (
      <div className={styles.divCard}>
         <div className={styles.buttonCardContainer}>
            <button onClick={onClose} className={styles.buttonCard}>X</button>
         </div> 
         <h2 className={styles.nameCard}>{name}</h2>
         <img  src={image} alt="character-imagen" className={styles.characterImagenCard}/>
         <div className={styles.speciesGenderCard}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
      </div>
   );
}
