import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';


const foto = {id: 4,foto: 'https://images.pexels.com/photos/6457562/pexels-photo-6457562.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', cantidad:'8 clases mensuales', precio: '$5000', detalle: 'Próximamente serás bilingüe'}

function ItemDetailContainer() {
    const getData2 = new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(foto)
        }, 2000);
    })
    const [item, setItem]= useState({})
    useEffect(() => {
        getData2
        .then(resp => setItem(resp))
    }, [])
    return (
        <div>
            <ItemDetails item= {item}/>
        </div>
    )
}

export default ItemDetailContainer