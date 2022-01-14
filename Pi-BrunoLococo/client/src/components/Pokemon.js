import "./Pokemon.css"

const Pokemon = ({name , life , strong , defense, speed , weight , height , img, types}) => {
    

    return (
        <div>
            <br />
            nombre : {name}
            <br />
            Tipo/s : {types.map(obj => obj.name + "  ")}
            <br />
            <img src={img} alt="pokemon" className="img"/>
            <br />
        </div>
    )
}

export default Pokemon