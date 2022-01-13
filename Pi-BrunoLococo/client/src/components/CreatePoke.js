import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createPoke } from "../actions"

const CreatePoke = () => {

    let dispatch = useDispatch();

    let [form , setForm] = useState({
        name : "",
        life : "",
        types : "",
        strong : "",
        defense : "",
        speed : "",
        height : "",
        weight : "",
        PokeImagen : "",
    })

    function HandleChange (e) {
        
        setForm({
            ...form, [e.target.name] : e.target.value
        })
        console.log(form);
    }

    function handleClick (e) {
        e.preventDefault();
        dispatch(createPoke(form))
    }

    return (
        <div>
            <form action="">
                <label >PokeName</label>
                <input name="name" onChange={HandleChange} type="text" />
                <br />
                <label >PokeLife</label>
                <input name="life" onChange={HandleChange} type="number" />
                <br />
                <label >Speed</label>
                <input name="speed" onChange={HandleChange} type="number" />
                <br />
                <label >defense</label>
                <input name="defense" onChange={HandleChange} type="number" />
                <br />
                <label >Strong</label>
                <input name="strong" onChange={HandleChange} type="number" />
                <br />
                <label >Type</label>
                <input name="types" onChange={HandleChange} type="text" />
                <br />
                <label >Height</label>
                <input name="height" onChange={HandleChange} type="number" />
                <br />
                <label >Weight</label>
                <input name="weight" onChange={HandleChange} type="number" />
                <br />
                <label >PokeImagen</label>
                <input name="pokeImagen" onChange={HandleChange} type="url" />
                <br />
                <button type="submit" onClick={handleClick}>Crear Koke</button>
            </form>
        </div>
    )
}

export default CreatePoke