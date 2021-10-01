import React from 'react'
import { useCartContext } from '../../context/CartContext'
import '../ItemListContainer/ItemDetails.css'

export function Prueba ({condition = true}){
    return (
        <>
        <h2>
        {condition ? 'prueba verdadera' : 'prueba falsa'}
        </h2>
        </>
    )
}

console.log(Prueba)

function Cart() {

    const {cartList, borrarTodo}= useCartContext()
    return (
        <center className="estilo">
            {cartList.map(({item}) =><div key={item.id}>
            <h2 >{item.item.id}</h2>
            <button onClick={()=>borrarTodo(item)}></button>
            </div>)
            }
        </center>
    )
}

export default Cart
