import { Link } from "react-router-dom"
import "./Pokemon.css"

const Pokemon = ({name , id, img, types}) => {
    
   // useEffect (()=> console.log(types),[])

    return (
        <div className="poke">
            <br />
            nombre : {name}
            <br />
            Tipo/s : {types.map(obj =>  obj.name + " ")}
            <br />
            <img src={img} alt="pokemon" className="img"/>
            <br />
            <Link to={"/detail/" + id}>Detalle</Link>
        </div>
    )
}

export default Pokemon