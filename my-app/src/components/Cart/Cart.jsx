import React from 'react'
import { cartContext } from '../../context/CartContext'
import { useContext, useState  } from 'react'
import '../ItemListContainer/ItemDetails.css'
import  firebase  from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../../services/Firebase'


function Cart() {
    const[formulario, setFormulario]=useState({
        nombre:'',
        mail:'',
        numero:''
    })
    const {cartList, borrarTodo}= useContext(cartContext)
    const cambiosEnLaOrden =(e)=>{
        e.preventDefault()
        let ordenDatos={}
        ordenDatos.nombre = formulario;
        ordenDatos.item = cartList.map(cartItem => {
            const id = cartItem.item.id;
            const categoria = cartItem.item.categoria;
            const precio = cartItem.item.precio * cartItem.quantity;
            
            return {id, categoria, precio}   
        })
    }

    const orden = getFirestore()
    orden.collection('orders').add(orden)
    .then(resp => alert(resp.id))
    .catch(error=> console.log(error))
    .finally(()=>
        setFormulario({
            name: '',
            tel: '',
            email: ''
        }) 
    )



    const itemsToUpdate = orden.collection('items').where(
        firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
    )
    
    const batch = orden.batch();

    itemsToUpdate.get()
    .then( collection=>{
        collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).cantidad
            })
        })

        batch.commit().then(res =>{
            console.log('resultado:', res)
        })
    })


    return (
        <div>
            <center className="estilo">
                { cartList.length === 0 ?
                    <div><h2>Primero deberá seleccionar un pack</h2></div>
                :
                <div>
                    {cartList.map(({item}) =><div key={item.id}>
                    <h2 >{item.item.id}</h2>
                    <button onClick={()=>borrarTodo(item)}></button>
                    </div>)}}
                    <form onChange={cambiosEnLaOrden}>
                        
                        <input type="text" placeholder="Ingrese su nombre" name="nombre"/>
                        <input type="text" placeholder="Ingrese su mail" name="mail"/>
                        <input type="text" placeholder="Ingrese su número" name="numero"/> 
                    </form>
                </div>}
            </center>
        </div>
    )
}

export default Cart
