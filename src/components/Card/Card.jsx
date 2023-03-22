import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCharacterFav, deleteCharacterFav } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card(props) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         props.deleteCharacterFav(props.id);
      } else {
         setIsFav(true);
         props.addCharacterFav(props);
      }
   };

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
         
      <div className={styles.divCard}>
         <div className={styles.buttonCardContainer}>
         {
            isFav ? (
               <button onClick={handleFavorite} className={styles.buttonFav}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={styles.buttonFav}>🤍</button>
            )
         }
            <button onClick={props.onClose} className={styles.buttonCard}>X</button>
         </div>
         <Link to={`/detail/${props.id}`} className={styles.link} >
            <h2 className={styles.nameCard}>{props.name}</h2>
         <img  src={props.image} alt="character-imagen" className={styles.characterImagenCard}/>
         <div className={styles.speciesGenderCard}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         </Link>
      </div>
      
   );
};

const mapDispatchToProps = (dispatch) => {
return {
   addCharacterFav: (character) => (dispatch(addCharacterFav(character))),
   deleteCharacterFav: (id) => (dispatch(deleteCharacterFav(id)))
}
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);