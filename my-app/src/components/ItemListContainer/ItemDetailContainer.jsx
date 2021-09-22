import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';



function ItemDetailContainer() {
    
    const getItems = new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(item)
        }, 2000);
    })
    const [item, setItem]= useState({})
    useEffect(() => {
        getItems
        .then((resp) => { setItem(resp.find(item=> item.id === 1 ));
        setItem(false);
        })
        .catch((error)=> console.log(error))
    }, [])
    return (
        <div>
            <ItemDetails item= {item}/>
        </div>
    )
}

export default ItemDetailContainer