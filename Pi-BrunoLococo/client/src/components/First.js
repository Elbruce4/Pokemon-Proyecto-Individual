import { Link } from "react-router-dom"
import pikachu from "../pics/150.jpg"

const First = () => {

    return (
        <div className="App">
            <Link to="/home" >
                <img src={pikachu} className='imgEnter'/>
                <h3>Ingresar!</h3>
            </Link>
        </div>
    )
}

export default First