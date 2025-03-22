import { createContext, useState } from "react"

export const ProductContext = createContext()

export const DataProvider = ({ children }) => {
    const [product, setProduct] = useState({})

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    )

}