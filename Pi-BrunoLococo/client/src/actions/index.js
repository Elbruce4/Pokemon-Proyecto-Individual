import axios from "axios"

export function getAllPoke () {
    return function (dispatch){
        return fetch("http://localhost:3001/pokemons")
            .then(obj=> obj.json())  
            .then(obj => dispatch({
                type : "GET_ALL_POKEMONS",
                payload : obj
            }))
        /* return dispatch({
            type : "GET_ALL_POKEMONS",
            payload : poke
        }) */
    }
}

export function getOnePoke (name) {
    return function (dispatch){
        return fetch("http://localhost:3001/pokemons?name=" + name)
            .then(obj=>obj.json())
            .then(obj => dispatch({
                type : "GET_ONE_POKEMON",
                payload : obj
            }))
    }
}