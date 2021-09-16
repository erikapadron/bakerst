import ItemList from "./ItemList"

const getFetch = new Promise((res,rej)=>{
    let rta ='200'
    if (rta === '200'){
        setTimeout(()=>{
            res(ItemList)
        }, 2000)
    }else{
        rej('error')
    }
})

console.log(getFetch)

function ItemListContainer(){


    return (
        <div>
            <ItemList/> 
            
        </div>

    )
}

export default ItemListContainer