import React from 'react'
import { ContextApp } from '../../App';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';


function ItemDetails({item}) {

    const{ addToCart }= useCartContext(ContextApp)
    const onAdd = (cant) => {
        console.log(cant)
        addToCart({item: item, cantidad: cant})
    }

    return (
        <div className="card text-center estilo">
            <h2 className= "card-tittle">El pack nro {item.id}</h2>
            <div><img className="card-body w-25" src={item.foto} alt="foto" /> </div>
            <h2 className="card-text">Es {item.detalle}</h2>
            <ItemCount stock= {6} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetails