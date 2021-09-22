import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';
import { useParams } from "react-router-dom"
import { Data } from './ItemListContainer';


function ItemDetailContainer() {
    const { idDetalle } = useParams();
    const [item, setItem]= useState({})
    
    const getItems = new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(Data)
        }, 2000);
    })

    useEffect(() => {
            getItems
            .then((resp) => { setItem(resp.find(item=> item.id == idDetalle ));
            })
            .catch(error => console.log(error))

    }, [idDetalle])
    
    return (
        <div>
            <ItemDetails item= {item}/>
        </div>
    )
}

export default ItemDetailContainer