import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; 
import styles from './Detail.module.css'

export default function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
        <div className={styles.divDetail}>
            <Link to="/home">
                <button className={styles.buttonGoBack}>Go back</button>
            </Link>
            <h1>{character.name}</h1>
            <h3>Status: {character.status}</h3>
            <h3>Specie: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            {character.origin && <h3>Origin: {character.origin.name}</h3>}
            <img src={character.image} alt={character.name} className={styles.imageDetail}/>

        </div>
    )
};