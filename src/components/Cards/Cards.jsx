import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.divCards}>
         {characters.map(character => <div className='cards-container'> {Card(character)} </div>)}
      </div>
   );
}
