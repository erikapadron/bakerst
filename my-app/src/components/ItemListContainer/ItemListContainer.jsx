import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { getFirebase } from "../../services/Firebase";
import { useParams } from "react-router-dom"
 
function ItemListContainer(){
    const [FotoClases, setFotoClases] = useState([])
    const [, setloading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(() => {
        if(idCategoria){
            const datos = getFirebase()
            datos.collection('clases').where('categoria', '==', idCategoria).get()
            .then(resp=>{
                setFotoClases(resp.docs.map(cantidad=>({id: cantidad.id, ...cantidad.data()}))) 
                })
            .catch(error => console.log(error))
            .finally(()=> setloading(false))}else{
                const datos = getFirebase()
                datos.collection('clases').get()
                .then(resp=>{
                    setFotoClases(resp.docs.map(cantidad=>({id: cantidad.id, ...cantidad.data()}))) 
                    })
                .catch(error => console.log(error))
                .finally(()=> setloading(false))
        }
    }, [idCategoria])

    return (
        <div>

            {   FotoClases.map(fotos =>
                <ItemList
                    foto={fotos.foto}
                    id={fotos.id}
                    cantidad={fotos.cantidad}
                    precio={fotos.precio}
                    detalle={fotos.detalle}
                
                /> 
            )}
            
        </div>

    )
}

export default ItemListContainer