import { useState, createContext} from "react";

export const cartContext= createContext()

export function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])



    const addToCard= prods =>{
        let productosCart = [...cartList]
        
        if (productosCart.some(i=> i.item.id === prods.item.id)) {
            productosCart.find(i=> i.item.id === prods.item.id).cantidad += prods.cantidad
            setCartList(productosCart);
        }else{
            setCartList([...cartList,prods]);
        }
    }

    const borrarTodo=()=>{
        cartList([])
    }
    return (
        <div>
            <cartContext.Provider
                value={{
                    cartList,
                    addToCard,
                    borrarTodo
            }}>
                {children}
            </cartContext.Provider>
        </div>
    )

}
