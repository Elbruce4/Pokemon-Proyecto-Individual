
const Pokemon = ({name , life , strong , defense, speed , weight , height , img, types}) => {
    

    return (
        <div>
            <br />
            nombre : {name}
            <br />
            Tipo/s : {types.map(obj => obj.name + "  ")}
            <br />
            <img src={img} alt="pokemon" />
            <br />
        </div>
    )
}

export default Pokemon