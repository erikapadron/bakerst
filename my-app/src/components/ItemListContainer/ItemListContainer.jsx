import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { getFirestore } from "../../services/Firebase";
import { useParams } from "react-router-dom"
 
function ItemListContainer(){
    const [cantidad, setFotoClases] = useState([])
    const [loading, setloading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(() => {

        const FotoClases = getFirestore()
        if(idCategoria){
            FotoClases.collection('clases').where('categoria', '==', idCategoria).get()
            .then(resp=>{
                setFotoClases(resp.docs.map(cantidad=>({id: cantidad.id, ...cantidad.data()}))) 
                })
            .catch(error => console.log(error))
            .finally(()=> setloading(false))}else{
                FotoClases.collection('clases').get()
                .then(resp=>{
                    setFotoClases(resp.docs.map(cantidad=>({id: cantidad.id, ...cantidad.data()}))) 
                    })
                .catch(error => console.log(error))
                .finally(()=> setloading(false))
        }
    }, [idCategoria])
    
    return (
        <div>
            <ItemList fotoclases= {cantidad} /> 
        </div>

    )
}
export default ItemListContainer