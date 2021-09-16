import ItemList from "./ItemList"
import { FotoClases } from "./ItemList"

const Item = ()=>{
    return (
        <>
            {FotoClases.map(fotos=> <ItemList FotoClases={fotos}/>)}
        </>
    )
}



export default Item