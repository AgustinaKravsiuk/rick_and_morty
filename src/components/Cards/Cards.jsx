import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.cardsContainer}>
         <div className={styles.divCards}>
            {characters.map(({id, name, species, gender, image,}) => 
            <div key={id}>
               <Card
                  id={id} name={name} species={species} gender={gender} image={image} onClose={() => props.onClose(id)}
               /> 
            </div>)}
         </div>
      </div>
   );
}

