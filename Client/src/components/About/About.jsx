import React from 'react'
import styles from './About.module.css'
 
export default function About(props) {
    return (
        <div className={styles.aboutContainer}>
        <div className={styles.divAbout}>
            <h2>Hola! Soy Agustina Kravsiuk</h2>
            <h3>Creadora de la página web que estás navegando</h3>
            <p className={styles.pAbout}>Es la primera aplicación que desarrollo.Contiene información de los personajes de la serie animada "Rick y Morty". Para acceder, necesitas poner su número de ID en la barra de búsqueda, espero que te diviertas y disfrutes la experiencia</p>
        </div>
        </div>
    )
}