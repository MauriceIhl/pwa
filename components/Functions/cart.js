import { useContext, useEffect, useState } from "react" 
import { Context } from "../context"

const AddToCart = (  {product, amount} ) => {
    const{ cart, setCart, storage, setStorage, total, setTotal } = useContext( Context )
    const[item, setItem] = useState()
 
    const getItem = () => {
        setItem({
            name: product.name,
            id: product.id,
            image: product.image.sourceUrl,
            price: parseFloat(product.price.substring(1)), 
            productAmount: parseInt(amount), 
            total: parseFloat(product.price.substring(1)*parseInt(amount))
        })
        
    }

    useEffect(() => {
        if(item !== undefined) {
            let storeCart = localStorage.getItem("Cart")
            storeCart = JSON.parse( storeCart )
            let copyCart = ""

            if(storeCart) {
                copyCart = storeCart
            } else {
                copyCart = cart 
            }
            
            copyCart = copyCart.filter(it => it.name !== item.name)
            setCart([...copyCart, item])
        } 
        setStorage(true)
    }, [item])

    useEffect(() => {
        if(cart.length) {
            localStorage.setItem("Cart", JSON.stringify(cart))
        }
        let total = 0
            cart.map(it => {
                total += parseFloat(it.price * it.productAmount) 
            })
        setTotal(total)
            localStorage.setItem("TotalCartAmount", JSON.stringify(total))
        setStorage(false)
    }, [storage])
    

    return <button className="btn" onClick={getItem}>In den Warenkorp</button>   
}

export default AddToCart