import { ADD_CHARACTER_FAV, DELETE_CHARACTER_FAV, FILTER, ORDER } from '../redux/types'

const initialState = {
    myFavorites: [],
    allCharacters: []
};


const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_CHARACTER_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case DELETE_CHARACTER_FAV:
            let filtered = state.myFavorites.filter((character) => character.id !== action.payload)
            return {
                ...state,
                myFavorites: filtered
            }
        case FILTER:
            let allCharFiltered = state.allCharacters.filter((character) => character.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharFiltered
            }
        case ORDER:
            const ascendingOrder = state.allCharacters.sort(function(a, b) {return a.id - b.id});
            const descendingOrder = state.allCharacters.sort(function(a, b) {return b.id - a.id})
            return {
                ...state,
                myFavorites: action.payload === "Ascendente" ? ascendingOrder : descendingOrder, 
            }
        default:
            return {...state};
    }
};

export default rootReducer;