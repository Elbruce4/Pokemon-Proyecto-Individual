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

export function createPoke (data) {
    return function (dispatch) {
        console.log("entro")
        return fetch("http://localhost:3001/pokemons", {
            method : "POST",
            body : JSON.stringify({
                //name, life , strong, defense, speed, height, weight, types
                name : data.name,
                life : data.life,
                types : data.types,
                speed : data.speed,
                strong : data.strong,
                defense : data.defense,
                weight : data. weight,
                height : data.height
                }),
            headers : {
                "Content-type" : "application/json"
            }
            })  
            .then(obj => obj.json())
            .then(obj=> dispatch({
                type : "CREATE_POKE",
                payload : obj
            }))
    }
}