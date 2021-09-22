import React from 'react'

function ItemDetails({item}) {
    return (
        <div className="card text-center estilo">
            <h2 className= "card-tittle">El pack nro {item.id}</h2>
            <div><img className="card-body w-25" src={item.foto} alt="foto" /> </div>
            <h2 className="card-text">Es {item.detalle}</h2>
        </div>
    )
}

export default ItemDetails