import ItemList from "./ItemList"
import { useEffect, useState } from "react"

export const Data = [
    {id: 1,foto: 'https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'2 clases mensuales', precio: '$2000', detalle: 'Ideal para quienes necesitan volver a recordar'},
    {id: 2,foto: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'3 clases mensuales', precio: '$3000', detalle: 'Perfecto para un viaje lejano'},
    {id: 3,foto: 'https://images.pexels.com/photos/3289167/pexels-photo-3289167.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'4 clases mensuales', precio: '$4000', detalle: 'Queres aprender rapido'},
    {id: 4,foto: 'https://images.pexels.com/photos/6457562/pexels-photo-6457562.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'8 clases mensuales', precio: '$5000', detalle: 'Próximamente serás bilingüe'},
];


const getData = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(Data)
    }, 2000)
})


function ItemListContainer(){
    const [FotoClases, setFotoClases] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getData
        .then ((rta) => {
            setFotoClases(rta)
        })
        .catch(error => console.log(error))
        .finally(()=> setloading(false))
    }, [])

    console.log(FotoClases)

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