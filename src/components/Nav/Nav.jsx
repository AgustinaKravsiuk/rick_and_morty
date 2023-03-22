import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'

export default function Nav(props){
    return (
        <div className={styles.navBar}>
            <NavLink to="/home" className={({isActive}) => isActive ? styles.active : styles.disable}>
                Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? styles.active : styles.disable }>
                About
            </NavLink>
            <NavLink to="/favorites" className={({isActive}) => isActive ? styles.active : styles.disable }>
                Favorites
            </NavLink>
            <SearchBar 
                onSearch={(characterID) => props.onSearch(characterID)}
            />
        </div>
    )
}