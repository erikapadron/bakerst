import {Link} from 'react-router-dom'
import { useState } from "react"
import './ItemCount.css'



const ItemCount = ({stock, initial, onAdd}) => {
    const [count , setCount] = useState(initial)
    const [cambioBoton, setCambioBoton] = useState(true)
    function ContadorSuma(){
        if(count<stock){
        setCount( count + 1)}
    }

    function ContadorResta(){
        if(count>initial){
        setCount(count - 1)}
    }

    const Quiero=()=>{
        onAdd(count)
        setCambioBoton(false)
    }
    return (
        <div>
            <button className= "contadores btn btn-primary btn-xl text-uppercase" onClick ={ContadorSuma}>+</button>
            { cambioBoton ? <button className= "contadores btn btn-primary btn-xl text-uppercase" onClick ={Quiero}>Quiero:<label>{count}</label></button>
                :
                <div>
                <Link to={'/'}>
                <button className= "contadores btn btn-primary btn-xl text-uppercase" onClick ={Quiero}>Seguir comprando:<label>{count}</label></button>  
                </Link>
                <Link to={'/Cart'}>
                <button className= "contadores btn btn-primary btn-xl text-uppercase" onClick ={Quiero}>Comprar:<label>{count}</label></button>  
                </Link>
                </div>
            }
   
            <button className= "contadores btn btn-primary btn-xl text-uppercase" onClick ={ContadorResta}>-</button>
        </div>
    )
}

export default ItemCount