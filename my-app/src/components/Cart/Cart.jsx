import React from 'react'
import { cartContext } from '../../context/CartContext'
import { useContext  } from 'react'
import '../ItemListContainer/ItemDetails.css'

function Cart() {

    const {cartList, borrarTodo}= useContext(cartContext)
    return (
        <center className="estilo">
            {cartList.map(({item}) =><div key={item.pack}>
            <h2 >{item.item.pack}</h2>
            <button onClick={()=>borrarTodo(item)}></button>
            </div>)
            }
        </center>
    )
}

export default Cart
