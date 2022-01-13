import {getAllPoke} from "../actions"

const initialState = {
    pokemons : [],
    allPokemons : [],
    pokemon : {},
    types : [],
}

function rootReducer (state = initialState , action) {
    switch(action.type){
        case "GET_ALL_POKEMONS":
            return {
                ...state,
                pokemons : action.payload,
                allPokemons : action.payload
            }
        case "GET_ONE_POKEMON":
            return {
                ...state,
                pokemon : action.payload
            }
        case "CREATE_POKE":
            return {
                ...state,
                pokemons : state.pokemons.concat(action.payload)
            }
        case "GET_TYPES" :
            return {
                ...state,
                types : action.payload
            }
        case "FILTER_BY_TYPE":
            let pokes = state.allPokemons;
            let filterByType = pokes.filter(obj => action.payload === obj.types[0].name);
            //let filterByType = pokes.filter(obj => obj.types.name.includes(action.payload))
            return {
                ...state,
                pokemons : filterByType
            }
        case "FILTER_BY_ORIGIN":
            let pokesByOrigin = action.payload === "All" ? state.allPokemons : null
            return {
                ...state,
                pokemons : pokesByOrigin
            }            
            default: return {...state};
    }
    
}

export default rootReducer