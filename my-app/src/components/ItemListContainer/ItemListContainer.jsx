
const CantidadClases= ['2 clases mensuales','3 clases mensuales','4 clases mensuales','8 clases mensuales']



const Clases= ({valor}) =>{
    return(
        <h2>{valor}</h2>
    )
}

function ItemListContainer(){
    const Cantidad = CantidadClases.map(t=> <Clases valor={t}/>)

    return (
        <div>
            {Cantidad}
        </div>
    )
}

export default ItemListContainer