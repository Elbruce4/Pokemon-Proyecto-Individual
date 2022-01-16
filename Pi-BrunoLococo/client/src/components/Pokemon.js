import { useEffect } from "react"
import "./Pokemon.css"

const Pokemon = ({name , life , strong , defense, speed , weight , height , img, types}) => {
    
   // useEffect (()=> console.log(types),[])

    return (
        <div>
            <br />
            nombre : {name}
            <br />
            Tipo/s : {/* types.map(obj => <p key ={obj.name}> {obj.name + " "}</p>) */}
            <br />
            <img src={img} alt="pokemon" className="img"/>
            <br />
        </div>
    )
}

export default Pokemon