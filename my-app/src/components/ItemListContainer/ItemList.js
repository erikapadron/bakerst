import React from 'react'
import Item from './Item';

export const FotoClases = [
    {id: 1,foto: 'https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'2 clases mensuales', precio: '$2000', detalle: 'Ideal para quienes necesitan volver a recordar'},
    {id: 2,foto: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'3 clases mensuales', precio: '$3000', detalle: 'Perfecto para un viaje lejano'},
    {id: 3,foto: 'https://images.pexels.com/photos/3289167/pexels-photo-3289167.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'4 clases mensuales', precio: '$4000', detalle: 'Queres aprender rapido'},
    {id: 4,foto: 'https://images.pexels.com/photos/6457562/pexels-photo-6457562.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'8 clases mensuales', precio: '$5000', detalle: 'Próximamente serás bilingüe'},
];



export default function ItemList() {
    return (
        <div>
            {FotoClases.map( (fotos)=> <Item fotos={fotos}/> <div key={fotos.id} className="card-body">
            <img src={fotos.foto} alt="" />
            <h2>{fotos.cantidad}</h2>
            <span>{fotos.precio}</span>
            </div>)}
        </div>
    )
}


