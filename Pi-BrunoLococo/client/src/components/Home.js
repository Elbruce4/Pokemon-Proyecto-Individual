import React from "react"
import { useEffect , useState } from "react"
import { useDispatch , useSelector , connect } from "react-redux"
import { getAllPoke , getOnePoke , getTypes , filterByType , filterByOrigin  , filterByName , filterByStrong } from "../actions"
import Pokemon from "./Pokemon"
import { Link } from "react-router-dom"
import Paginado from "./Paginado"
import cargando from "../pics/cargando.gif"
import NavBar from "./Nav"


const Home = () => {


    let pokemons = useSelector((state) => state.pokemons);
    let pokeTypes = useSelector(state => state.types)

    let [paginaActual , setPaginaActual] = useState(1);
    let [pokexPagina , setPokexPagina] = useState(12);
    let indexUltimoPoke = paginaActual * pokexPagina;
    let indexPrimerPoke = indexUltimoPoke - pokexPagina;
    let pokemonesActuales = pokemons.slice(indexPrimerPoke,indexUltimoPoke);

    const paginado = (numeroPag) =>{
        setPaginaActual(numeroPag)
    }


    let dispatch = useDispatch();

    let [onePoke , setOnePoke] = useState();
    let [refresh , setRefresh] = useState()
    
    useEffect(()=>{

        dispatch(getTypes());

    },[])
    
    useEffect(()=>{

        dispatch(getAllPoke());
        //dispatch(getTypes());

    },[dispatch]);

    function handleChange (e) {
        setOnePoke(e.target.value);
        //dispatch(getOnePoke(e.target.value))
    }

    function handleClick () {
        dispatch(getOnePoke(onePoke))
        //getOnePoke()
    }

    function handleFilterByType (e) {
        console.log(e.target.value)
        dispatch(filterByType(e.target.value))
        setPaginaActual(1)
    }

    function handleFilterByOrigin (e) {
        dispatch(filterByOrigin(e.target.value));
        setPaginaActual(1)
    }

    function handleFilterByName (e) {
        dispatch(filterByName(e.target.value));
        setPaginaActual(1)
        setRefresh("Ordenado por " + e.target.value)
    }

    function handleFilterByStrong (e) {
        dispatch(filterByStrong(e.target.value));
        setPaginaActual(1)
        setRefresh("Ordenado por " + e.target.value)
    }

    return (
        <div>
            <NavBar/>
            <input type="text" placeholder="Buscar nombre exacto" onChange={handleChange}/>
            <Link to="/search">
                <button onClick={handleClick}>Buscar Pokemones</button>
            </Link>
            <div>
                <select onClick={handleFilterByName}>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
                <select onClick={handleFilterByOrigin}>
                    <option value=" ">Filtrar por creación</option>
                    <option value="All">Todos</option>
                    <option value="Db">Creado en DB</option>
                    <option value="Api">Poke existente</option>
                </select>
                <select name="" id="" onClick={handleFilterByStrong}>
                    <option value=" ">Ordenar por fuerza</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
                <select onClick={handleFilterByType}>
                    <option value=" ">Todos</option>
                {
                    pokeTypes && pokeTypes.map(obj=>{
                        return <option value={obj.name}  key={obj.id}>{obj.name}</option>
                               
                    })
                }
                </select>
                
            </div>

            <Paginado paginado={paginado} pokemons={pokemons.length} pokexPagina={pokexPagina} />

            {
                pokemonesActuales.length > 0 ? pokemonesActuales.map(obj=>{
                   return <Pokemon name={obj.name} life={obj.life} strong={obj.strong} defense={obj.defense} speed={obj.speed} 
                   height={obj.height} weight={obj.weight} key={obj.ID} img={obj.img} types={obj.types}/>
                }) : <img src={cargando}/>
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