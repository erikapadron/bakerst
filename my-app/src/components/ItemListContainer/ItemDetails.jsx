import React from 'react'

function ItemDetails({item}) {
    return (
        <div>
            <h2>{item.id}</h2>
            <h2>{item.detalle}</h2>
        </div>
    )
}

export default ItemDetails