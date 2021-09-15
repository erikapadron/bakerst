import ItemList from "./ItemList"
import { getFetch } from "./ItemList"


const getFetch = new Promise((res,rej)=>{
    let rta ='200'
    if (rta === '200'){
        setTimeout(()=>{
            res(FotoClases)
        }, 3000)
    }else{
        rej('error')
    }
})

const getFetch = new Promise((resolve)=> {
    setTimeout(()=>{
        resolve(FotoClases)
    },2000)
})

function ItemListContainer(){
    const [FotoClases, setFotoClases] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        getFetch
        .then ((rta) => {
            setFotoClases(rta)
        })
        .catch(error => console.log(error))
        .finally(()=>setloading(false))
    }, [])

    return (
        <div>
            {loading ? <h3>Consultando clases</h3>: <ItemList FotoClases={FotoClases}/> }
            
        </div>

    )
}

export default ItemListContainer