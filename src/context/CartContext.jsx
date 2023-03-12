// crear un contexto
//inicializar con un array vacio
//exportar e importar en app.

import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    //estado y funciones globales
    const [cartList, setCartList] = useState([])

    const agregarCart = (producto) => {
        setCartList(producto)
    }


    return(
        <CartContext.Provider value={{
            cartList,
            agregarCart

        }} >
                {children}
        </CartContext.Provider>
    )
}

