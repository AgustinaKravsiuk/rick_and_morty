const { ADD_CHARACTER_FAV, DELETE_CHARACTER_FAV } = require('../redux/types');

export const addCharacterFav = (character) => ({
    type: ADD_CHARACTER_FAV,
    payload: character,
});

export const deleteCharacterFav = (id) => ({
    type: DELETE_CHARACTER_FAV,
    payload: id,
});