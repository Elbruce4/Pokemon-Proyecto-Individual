import React, { useEffect } from "react";
import {  useSelector } from "react-redux";


const SearchPoke = () => {

    let poke = useSelector(obj => obj.pokemon)

    useEffect(()=> () => { return console.log(poke) } ,[])

    return (
        <div>
            { !poke ? "Cargando" : 
            
            <div>
                {poke.name}
                <br />
                <img src={poke.img} />
                <br />
                Código : {poke.ID}
                Vida : {poke.life}
                Fuerza : {poke.strong}
                Defensa : {poke.defense}
                Velocidad : {poke.speed}
                <br />
                Altura : {poke.height}
                Peso : {poke.weight} 
            </div> 
            
            }

        </div>
    )
}

export default SearchPoke;