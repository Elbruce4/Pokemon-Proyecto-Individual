import React from "react"
import { useEffect , useState } from "react"
import { useDispatch , useSelector , connect } from "react-redux"
import { getAllPoke , getOnePoke } from "../actions"
import Pokemon from "./Pokemon"
import { Link } from "react-router-dom"
import Paginado from "./Paginado"

const Home = () => {


    let pokemons = useSelector((state) => state.pokemons);

    let [paginaActual , setPaginaActual] = useState(1);
    let [pokexPagina , setPokexPagina] = useState(12);
    let indexUltimoPoke = paginaActual * pokexPagina;
    let indexPrimerPoke = indexUltimoPoke - pokexPagina;
    let pokemonesActuales = pokemons.slice(indexPrimerPoke,indexUltimoPoke);

    const paginado = (numeroPag) =>{
        setPaginaActual(numeroPag)
    }


    let dispatch = useDispatch();

    let [onePoke , setOnePoke] = useState()
    
    useEffect(()=>{

        dispatch(getAllPoke());
        console.log(pokemons);

    },[dispatch]);

    function handleChange (e) {
        setOnePoke(e.target.value);
        //dispatch(getOnePoke(e.target.value))
    }

    function handleClick () {
        dispatch(getOnePoke(onePoke))
    }

    return (
        <div>
            <input type="text" placeholder="Buscar nombre exacto" onChange={handleChange}/>
            <Link to="/search">
                <button onClick={handleClick}>Buscar Pokemones</button>
            </Link>
            <div>
                <select name="" id="">
                    <option value="">A-Z</option>
                    <option value="">Z-A</option>
                </select>
                <select name="" id="">
                    <option value="">Todos</option>
                    <option value="">Creado en DB</option>
                    <option value="">Poke existente</option>
                </select>
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>

            <Paginado paginado={paginado} pokemons={pokemons.length} pokexPagina={pokexPagina} />

            {
                pokemonesActuales.length > 0 ? pokemonesActuales.map(obj=>{
                   return <Pokemon name={obj.name} life={obj.life} strong={obj.strong} defense={obj.defense} speed={obj.speed} 
                   height={obj.height} weight={obj.weight} key={obj.ID} img={obj.img} types={obj.type}/>
                }) : <h5>"Cargando..."</h5>
            }
            
        </div>
        
    )
}
/* 
const mapState = (state) => {
    return {
        pokemons : state.pokemons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPokemones : () => {dispatch(getAllPoke())}
    }
}

export default connect(mapState , mapDispatchToProps)(Home); */

export default Home