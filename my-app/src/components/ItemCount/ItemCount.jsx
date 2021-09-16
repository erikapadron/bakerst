
import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count , setCount] = useState(initial)
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
    }
    return (
        <div>
            <button className= "contadores btn btn-primary btn-xl text-uppercase" onClick ={ContadorSuma}>+</button>
            <button className= "contadores btn btn-primary btn-xl text-uppercase" onClick ={Quiero}>Quiero:<label>{count}</label></button>
            <button className= "contadores btn btn-primary btn-xl text-uppercase" onClick ={ContadorResta}>-</button>
        </div>
    )
}

export default ItemCount