import { ADD_CHARACTER_FAV, DELETE_CHARACTER_FAV } from '../redux/types'

const initialState = {
    myFavorites: [],
};


const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_CHARACTER_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_CHARACTER_FAV:
            let filtered = state.myFavorites.filter((character) => character.id !== action.payload)
            return {
                ...state,
                myFavorites: filtered
            }
        default:
            return {...state};
    }
};

export default rootReducer;