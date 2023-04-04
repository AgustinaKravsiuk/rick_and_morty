const { ADD_CHARACTER_FAV, DELETE_CHARACTER_FAV, FILTER, ORDER } = require('../redux/types');

export const addCharacterFav = (character) => ({
    type: ADD_CHARACTER_FAV,
    payload: character,
});

export const deleteCharacterFav = (id) => ({
    type: DELETE_CHARACTER_FAV,
    payload: id,
});

export const filterCards = (status) => ({
    type: FILTER,
    payload: status,
});

export const orderCards = (id) => ({
    type: ORDER,
    payload: id,
});