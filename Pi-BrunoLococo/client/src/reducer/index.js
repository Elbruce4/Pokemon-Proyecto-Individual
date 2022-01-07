import {getAllPoke} from "../actions"

const initialState = {
    pokemons : [],
    pokemon : {}
}

function rootReducer (state = initialState , action) {
    switch(action.type){
        case "GET_ALL_POKEMONS":
            return {
                ...state,
                pokemons : action.payload
            }
        case "GET_ONE_POKEMON":
            return {
                ...state,
                pokemon : action.payload
            }
            default: return {...state};
    }
    
}

export default rootReducer