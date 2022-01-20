import React from "react";

const Paginado = ({paginado , pokexPagina , pokemons}) => {

    const style = {
        margin : "1px"
    }
    let arrayPoke = [];

    for (let i = 1; i <= Math.ceil(pokemons/pokexPagina); i++){
        arrayPoke.push(i)
    }

    return (
        <ul className="paginado" >
            {
                arrayPoke && arrayPoke.map(num =>{
                    return <li key={num} onClick={()=>paginado(num)}>
                        <button> {num} </button>
                    </li>
                })
            }
        </ul>
    )
}

export default Paginado