import React , {useState} from "react"
import { Link } from "react-router-dom"
import homeClick from "../pics/pikachu.jpg"
import { useDispatch } from "react-redux"
import { getOnePoke } from "../actions"
import "./Nav.css"
import gengar from "../pics/gengar.png"

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
        <div>
            <div className="navBar">
                {/* <img src={alakazan} className="alakazan"/> */}
                <Link to="/home">
                    <img src={homeClick} className="imgHome"/>
                </Link>
                <Link to="create">
                    <button className="btn">Create Poke</button>
                </Link>
                <div className="pokeSearch">
                        <input type="text" placeholder="Buscar nombre exacto" onChange={handleChange}/>
                        <Link to="/search">
                            <button onClick={handleClick} className="btn">Buscar Pokemones</button>
                        </Link>
                    </div>
            <img src={gengar} className="gengar" />
            </div>
        </div>
    )
}

export default NavBar