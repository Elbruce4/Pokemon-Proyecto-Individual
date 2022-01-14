import React from "react"
import { useState , useEffect} from "react"
import { useDispatch , useSelector } from "react-redux"
import { createPoke , getTypes } from "../actions"

const CreatePoke = () => {

    let dispatch = useDispatch();
    let types = useSelector(obj => obj.types)

    let [form , setForm] = useState({
        name : "",
        life : "",
        types : [],
        strong : "",
        defense : "",
        speed : "",
        height : "",
        weight : "",
        img : "",
    })

    useEffect (()=>{
        dispatch(getTypes())
    },[])

    function HandleChange (e) {
        
        setForm({
            ...form, [e.target.name] : e.target.value
        })
        console.log(form);
    }

    function handleTypes (e) {

        if (e.target.value !== "ignore") {
            setForm({
                ...form,
                types : [...form.types, e.target.value]
            });
        e.target.value = "ignore"
        console.log(form)
        } 
            
    }

    function handleClick (e) {
        e.preventDefault();
        dispatch(createPoke(form));
        console.log(form)
    }

    /* function quitarType (e) {
        e.preventDefault()
        console.log(e.target.value)
        form.types.filter(obj => obj !== e.target.value)
    } */

    return (
        <div>
            <form action="">
                <label >PokeName</label>
                <input name="name" onChange={HandleChange} type="text" value={form.name} />
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
                <label >Height</label>
                <input name="height" onChange={HandleChange} type="number" />
                <br />
                <label >Weight</label>
                <input name="weight" onChange={HandleChange} type="number" />
                <br />
                <label >PokeImagen</label>
                <input name="img" onChange={HandleChange} type="url" placeholder="Coloca la URL de la imagen"/>
                <br />
                <select onClick={handleTypes}>
                    <option value="ignore">Selecciones los tipos</option>
                    {
                        types.map(obj => <option key={obj.id}>{obj.name}</option> )
                    }
                </select>
                <div>
                    {form.types.map(obj => 
                            obj + " "
                    )}
                </div>
                <button type="submit" onClick={handleClick}>Crear Poke</button>
            </form>
        </div>
    )
}

export default CreatePoke