import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'

export default function Nav(props){
    return (
        <div className={styles.navBar}>
            <SearchBar 
                onSearch={(characterID) => props.onSearch(characterID)}
            />
        </div>
    )
}