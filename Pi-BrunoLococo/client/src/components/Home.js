import React from "react"
import { useEffect , useState } from "react"
import { useDispatch , useSelector , connect } from "react-redux"
import { getAllPoke , getOnePoke , getTypes , filterByType , filterByOrigin  , filterByName , filterByStrong } from "../actions"
import Pokemon from "./Pokemon"
import { Link } from "react-router-dom"
import Paginado from "./Paginado"
import cargando from "../pics/cargando.gif"
import NavBar from "./Nav"
import "./Home.css"


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

    let [refresh , setRefresh] = useState()
    
    useEffect(()=>{

        dispatch(getTypes());

    },[])
    
    useEffect(()=>{

        dispatch(getAllPoke());
        //dispatch(getTypes());

    },[dispatch]);


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
            <div className="menu">
            
                <div className="filter">
                    <select onClick={handleFilterByName} className="filtros">
                        <option value=" ">Ordenar por nombre</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                    <select name="" id="" onClick={handleFilterByStrong} className="filtros">
                        <option value=" ">Ordenar por fuerza</option>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <select onClick={handleFilterByOrigin} className="filtros">
                        <option value=" ">Filtrar por creación</option>
                        <option value="All">Todos</option>
                        <option value="Db">Creado en DB</option>
                        <option value="Api">Poke existente</option>
                    </select>
                    <select onClick={handleFilterByType} className="filtros">
                        <option value=" ">Buscar por tipo</option>
                    {
                        pokeTypes && pokeTypes.map(obj=>{
                            return <option value={obj.name}  key={obj.id}>{obj.name}</option>
                                
                        })
                    }
                    </select>
                    
                </div>

            </div>
            
            <div className="pokemons">
                {
                    pokemonesActuales.length > 0 ? pokemonesActuales.map(obj=>{
                    return <Pokemon name={obj.name} life={obj.life} strong={obj.strong} defense={obj.defense} speed={obj.speed} 
                    height={obj.height} weight={obj.weight} key={obj.ID} img={obj.img} types={obj.types} id={obj.ID} className="onePoke"/>
                    }) : <img src={cargando} className="loading"/>
                }
                <Paginado paginado={paginado} pokemons={pokemons.length} pokexPagina={pokexPagina} />
            </div>
            
        </div>
        
    )
}

export default Home