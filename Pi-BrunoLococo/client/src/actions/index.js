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
                height : data.height,
                img : data.img
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

export function getTypes () {
    return function (dispatch) {
        fetch("http://localhost:3001/types")
            .then(obj=> obj.json())
            .then(obj=> dispatch({
                type : "GET_TYPES",
                payload : obj
            }))
    }
}

export function filterByType (type) {
    return {
        type : "FILTER_BY_TYPE",
        payload : type
    }
}

export function filterByOrigin (origin) {
    return {
        type : "FILTER_BY_ORIGIN",
        payload : origin
    }
}

export function filterByName (value) {
    return {
        type : "FILTER_BY_NAME",
        payload : value
    }
} 

export function filterByStrong (value) {
    return {
        type : "FILTER_BY_STRONG",
        payload : value
    }
} 

export function cleanSearch () {
    return {
        type : "CLEAN_SEARCH",
        payload : {}
    }
}

export function getDetail (id) {
    return function (dispatch) {
        fetch("http://localhost:3001/pokemons/" + id)
            .then(obj => obj.json())
            .then(obj => dispatch({
                    type : "GET_DETAIL",
                    payload : obj
            }))
    }
}