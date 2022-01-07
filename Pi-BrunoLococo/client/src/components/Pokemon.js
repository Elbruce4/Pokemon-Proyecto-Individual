
const Pokemon = ({name , life , strong , defense, speed , weight , height , img, types}) => {
    
    return (
        <div>
            <br />
            nombre : {name}
            <br />
            Tipo : 
            <br />
            <img src={img} alt="pokemon" />
            <br />
        </div>
    )
}

export default Pokemon