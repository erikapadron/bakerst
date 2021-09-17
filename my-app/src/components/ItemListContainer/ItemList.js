import React from 'react'



const ItemList = ({id, foto, cantidad, precio, detalle}) => {
    return (
        
        <div className="card w-50"><br/>
            <h2>Pack nro{id}</h2><br/>            
            <img src={foto} alt="foto" />  
            <h2>{cantidad}</h2>          
            <h2>Precio: {precio}</h2>
            <h3>{detalle}</h3>

        </div>
        
    )
};

export default ItemList


