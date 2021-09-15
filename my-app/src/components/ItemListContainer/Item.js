import React from 'react'


export default function Item({fotos}) {
    return (
        <div key={fotos.id}>
            <button>{fotos.detalle}</button>
        </div>
    )
}



