import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";


const SearchPoke = () => {

    let poke = useSelector(obj => obj.pokemon)

    useEffect(()=> console.log(poke) , [poke])

    return (
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
    )
}

export default SearchPoke;