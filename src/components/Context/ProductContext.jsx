import { createContext, useState } from "react"

export const ProductContext = createContext()

export const DataProvider = ({ children }) => {
    const [cartProduct, setCartProduct] = useState([])

    return (
        <ProductContext.Provider value={{ cartProduct, setCartProduct }}>
            {children}
        </ProductContext.Provider>
    )

}