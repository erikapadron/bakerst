import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';
import { useParams } from "react-router-dom"
import { getFirestore } from "../../services/Firebase";


function ItemDetailContainer() {
    const { idDetalle } = useParams();
    const [item, setItem]= useState({})
    

    useEffect(() => {

        if(idDetalle){
            const datos = getFirestore()
            datos.collection('clases').where('pack', '==', idDetalle).get()
            .then(resp=>{
                setItem(resp.docs.map(item=>({id: item.id, ...item.data()}))) 
                })
            .catch(error => console.log(error))}else{
                const datos = getFirestore()
                datos.collection('clases').get()
                .then(resp=>{
                    setItem(resp.docs.map(item=>({id: item.id, ...item.data()}))) 
                    })
                .catch(error => console.log(error))

        }

    }, [idDetalle])

    return (
        <div>
            <ItemDetails item= {item}/>
        </div>
    )
}

export default ItemDetailContainer