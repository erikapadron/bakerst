import React from 'react'
import { useCartContext } from '../../context/CartContext'
import '../ItemListContainer/ItemDetails.css'

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
