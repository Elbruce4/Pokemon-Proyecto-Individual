import React , {useState} from "react"
import { Link } from "react-router-dom"
import homeClick from "../pics/pikachu.jpg"
import { useDispatch } from "react-redux"
import { getOnePoke } from "../actions"
import "./Nav.css"

const NavBar = () => {

    const dispatch = useDispatch()
    let [onePoke , setOnePoke] = useState();

    function handleClick () {
        dispatch(getOnePoke(onePoke))
        //getOnePoke()
    }
    
    function handleChange (e) {
        setOnePoke(e.target.value);
        //dispatch(getOnePoke(e.target.value))
    }
    return (
        <div className="navBar">
            <Link to="/home">
                <img src={homeClick} className="imgHome"/>
            </Link>
            <Link to="create">
                <p>Create Poke</p>
            </Link>
            <div className="pokeSearch">
                    <input type="text" placeholder="Buscar nombre exacto" onChange={handleChange}/>
                    <Link to="/search">
                        <button onClick={handleClick}>Buscar Pokemones</button>
                    </Link>
                </div>
        </div>
    )
}

export default NavBar