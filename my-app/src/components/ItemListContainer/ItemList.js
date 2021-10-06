import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import '../ItemCount/ItemCount.css'
import {Link} from 'react-router-dom'
import "./ItemDetails.css"

const ItemList = ({pack, foto, cantidad, precio}) => {
    const onAdd = (cant) => {
        console.log(cant)
      }
    return (
        <div className="container  d-flex ">
            <div className="col-4">
                <div className="card"><br/>
                    <h2 className="card-tittle">Pack nro{pack}</h2><br/>            
                    <img className="card-img-top" src={foto} alt="foto" />  
                    <h2 className="list-group-item">{cantidad}</h2> 
                    <Link to={`/detalle/${pack}`}>
                        <button className=" aling-items-center justify-content-center btn btn-primary btn-block contadores"> Detalle </button>
                    </Link>                            
                    <h2 className="list-group-item">Precio: {precio}</h2>
                    
                    <ItemCount stock= {6} initial={1} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
};

export default ItemList


