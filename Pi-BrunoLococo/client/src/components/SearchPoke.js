import React, { useEffect } from "react";
import {  useSelector , useDispatch } from "react-redux";
import { cleanSearch } from "../actions";
import cargando from "../pics/cargando.gif"
import "./SearchPoke.css"
import NavBar from "./Nav";


const SearchPoke = () => {

    let poke = useSelector(obj => obj.pokemon)
    let dispatch = useDispatch()

    useEffect(()=> () => { return dispatch(cleanSearch()) } ,[])

    /* 
    
    */

    return (
        <div>
            <NavBar></NavBar>
            <div className="detail">

            { 
                
                !poke.hasOwnProperty("name") ? <img src={cargando} /> : 
                
                <div>
                    {poke.name}
                    <br />
                    <img src={poke.img} className="img" />
                    <br />
                    Código : {poke.ID}
                    <br />
                    Vida : {poke.life}
                    <br />
                    Fuerza : {poke.strong}
                    <br />
                    Defensa : {poke.defense}
                    <br />
                    Velocidad : {poke.speed}
                    <br />
                    Altura : {poke.height}
                    <br />
                    Peso : {poke.weight} 
                </div>  
                
                } 

            </div>
        </div>
    )
}

export default SearchPoke;