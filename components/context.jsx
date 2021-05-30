import React, {createContext, useState} from "react"

export const Context = createContext()

export const GlobalProvider = (props) => {
    const[cart, setCart] = useState([])
    const[storage, setStorage] = useState(false)
    const[total, setTotal] = useState()
    const[mail, setMail] = useState({valide: true, content: ""})

    const value = { 
        cart, 
        setCart,
        storage,
        setStorage, 
        total, 
        setTotal, 
        mail, 
        setMail
    }

 
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}