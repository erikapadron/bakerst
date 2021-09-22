import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
 
export const Data = [
    {id: 2, categoria:'ingles', foto: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'3 clases mensuales', precio: '$3000', detalle: 'Perfecto para un viaje lejano'},
    {id: 1, categoria:'ingles', foto: 'https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'2 clases mensuales', precio: '$2000', detalle: 'Ideal para quienes necesitan volver a recordar'},
    {id: 3, categoria:'ingles', foto: 'https://images.pexels.com/photos/3289167/pexels-photo-3289167.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'4 clases mensuales', precio: '$4000', detalle: 'Queres aprender rapido'},
    {id: 4, categoria:'ingles', foto: 'https://images.pexels.com/photos/6457562/pexels-photo-6457562.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'8 clases mensuales', precio: '$5000', detalle: 'Próximamente serás bilingüe'},
    {id: 5, categoria:'español', foto: 'https://images.pexels.com/photos/6976001/pexels-photo-6976001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'2 clases mensuales', precio: '$2000', detalle: 'fff'},
    {id: 6, categoria:'español', foto: 'https://images.pexels.com/photos/4050356/pexels-photo-4050356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'3 clases mensuales', precio: '$3000', detalle: 'fgbf'},
    {id: 7, categoria:'español', foto: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'4 clases mensuales', precio: '$4000', detalle: 'fg'},
    {id: 8, categoria:'español', foto: 'https://images.pexels.com/photos/3253492/pexels-photo-3253492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'8 clases mensuales', precio: '$5000', detalle: 'bfg'},
    {id: 9, categoria:'canto', foto: 'https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'2 clases mensuales', precio: '$2000', detalle: 'fg'},
    {id: 10, categoria:'canto', foto: 'https://images.pexels.com/photos/3662764/pexels-photo-3662764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'3 clases mensuales', precio: '$3000', detalle: 'fg'},
    {id: 11, categoria:'canto', foto: 'https://images.pexels.com/photos/9522857/pexels-photo-9522857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'4 clases mensuales', precio: '$4000', detalle: 'bg'},
    {id: 12, categoria:'canto', foto: 'https://images.pexels.com/photos/7613696/pexels-photo-7613696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'8 clases mensuales', precio: '$5000', detalle: 'fg'},
    {id: 13, categoria:'piano', foto: 'https://images.pexels.com/photos/2378209/pexels-photo-2378209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'2 clases mensuales', precio: '$2000', detalle: 'fb'},
    {id: 14, categoria:'piano', foto: 'https://images.pexels.com/photos/4695765/pexels-photo-4695765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'3 clases mensuales', precio: '$3000', detalle: 'fg'},
    {id: 15, categoria:'piano', foto: 'https://images.pexels.com/photos/5727886/pexels-photo-5727886.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'4 clases mensuales', precio: '$4000', detalle: 'fg'},
    {id: 16, categoria:'piano', foto: 'https://images.pexels.com/photos/6494204/pexels-photo-6494204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'8 clases mensuales', precio: '$5000', detalle: 'fg'},
    {id: 17, categoria:'armonia', foto: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'2 clases mensuales', precio: '$2000', detalle: 'fg'},
    {id: 18, categoria:'armonia', foto: 'https://images.pexels.com/photos/248510/pexels-photo-248510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'3 clases mensuales', precio: '$3000', detalle: 'fg'},
    {id: 19, categoria:'armonia', foto: 'https://images.pexels.com/photos/7940018/pexels-photo-7940018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'4 clases mensuales', precio: '$4000', detalle: 'fg'},
    {id: 20, categoria:'armonia', foto: 'https://images.pexels.com/photos/5598953/pexels-photo-5598953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'8 clases mensuales', precio: '$5000', detalle: ''},
];


const getData = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(Data)
    }, 2000)
})


function ItemListContainer(){
    const [FotoClases, setFotoClases] = useState([])
    const [, setloading] = useState(true)
    const { idCategoria } = useParams()
    const { idDetalle } = useParams()

    useEffect(() => {
        if (idDetalle){
            getData
            .then ((rta) => {
                setFotoClases(rta.filter(Data => Data.detalle=== idDetalle))
            })
            .catch(error => console.log(error))
            .finally(()=> setloading(false))
        }else{
        getData
        .then ((rta) => {
            setFotoClases(rta)
        })
        .catch(error => console.log(error))
        .finally(()=> setloading(false))}
    }, [idDetalle])
    useEffect(() => {
        if (idCategoria){
            getData
            .then ((rta) => {
                setFotoClases(rta.filter(Data => Data.categoria=== idCategoria))
            })
            .catch(error => console.log(error))
            .finally(()=> setloading(false))
        }else{
        getData
        .then ((rta) => {
            setFotoClases(rta)
        })
        .catch(error => console.log(error))
        .finally(()=> setloading(false))}
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