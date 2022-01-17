
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
            let filterByType = action.payload === " " ? state.allPokemons : 
            pokes.filter(obj => 
                obj.types.map(obj => obj.name).includes(action.payload))
            return {
                ...state,
                pokemons : filterByType
            }
        case "FILTER_BY_ORIGIN":
            let pokesByOrigin = [];
            if(action.payload === "All" || action.payload === " "){
                pokesByOrigin = state.allPokemons
            } else if (action.payload === "Db") {
                pokesByOrigin = state.allPokemons.filter (obj => obj.createdInDb)
            } else if (action.payload === "Api") {
                pokesByOrigin = state.allPokemons.filter (obj => !obj.createdInDb)
            }
            return {
                ...state,
                pokemons : pokesByOrigin
            }
        case "CLEAN_SEARCH":
            return {
                ...state,
                pokemon : action.payload
            }
        case "FILTER_BY_NAME":
            if(action.payload === " "){
                return {
                    ...state,
                    pokemons : state.allPokemons
                }
            } else {
                let orderPokes = action.payload === "asc" ? 
                state.allPokemons.sort((a , b) =>{
                    if (a.name > b.name) {
                        return 1;
                    } else if (a.name < b.name) {
                        return -1;
                    } else {
                        return 0
                    }
                }) : 
                state.allPokemons.sort((a , b) =>{
                    if (a.name > b.name) {
                        return -1;
                    } else if (a.name < b.name) {
                        return 1;
                    } else {
                        return 0
                    }
                })
                return {
                    ...state,
                    pokemons : orderPokes
                }      
            }
        case "FILTER_BY_STRONG":
            if (action.payload === " ") return {...state, pokemons : state.allPokemons}
            let stronger = action.payload === "-" ? 
            state.allPokemons.sort((a,b) => {
                if (a.strong > b.strong) {
                    return 1;
                } else if (a.strong < b.strong) {
                    return -1;
                } else {
                    return 0
                }
            }) : 
            state.allPokemons.sort((a , b) =>{
                if (a.strong > b.strong) {
                    return -1;
                } else if (a.strong < b.strong) {
                    return 1;
                } else {
                    return 0
                }
            })
            return {
                ...state,
                pokemons : stronger
            }
        case "GET_DETAIL" :
            return {
                ...state,
                pokemon : action.payload
            }
            default: return {...state};
    }
    
}

export default rootReducer