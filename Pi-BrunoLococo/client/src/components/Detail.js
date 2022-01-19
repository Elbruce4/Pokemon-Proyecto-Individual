import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../actions";
import "./Detail.css"
import NavBar from "./Nav";
import cargando from "../pics/cargando.gif"
import { cleanSearch } from "../actions";

const Detail = (props) => {

    const dispatch = useDispatch();
    let pokemon = useSelector(obj => obj.pokemon)

    useEffect(()=>{dispatch(getDetail(props.match.params.id))},[dispatch])
    useEffect(()=> {
        return ()=> dispatch(cleanSearch())
    },[])

    const style = {
      // background-image : pokemon.img
      backgroundImage : "pokemon.img"
    }

    return (
        <div>
            <NavBar></NavBar>

            {pokemon.hasOwnProperty("name") ? 

            <div style={style} className="detail">
                <h1>Nombre : {pokemon.name.toUpperCase()}</h1>
                <p>Fuerza : {pokemon.strong}</p>
                <p>Defensa : {pokemon.defense}</p>
                <p>Velocidad : {pokemon.speed}</p>
                <p>Peso : {pokemon.weight}</p>
                <p>Altura : {pokemon.height}</p>
                <p>HP :{pokemon.life}</p>
                <img src={pokemon.img} className="img" />

            </div> : <img src={cargando} className="img" />

            }
        </div>
    )
}

export default Detail