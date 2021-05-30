import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { Context } from "../context"

const MenuItem = () => {
    const{ storage } = useContext( Context )
    const[ total, setTotal] = useState(0)


    useEffect(() => {
        if(process.browser) {
            let storeCart = localStorage.getItem("Cart")
            storeCart = JSON.parse( storeCart )

            if(storeCart) {
               let totalAmount = 0
                storeCart.map(item => {
                    totalAmount += item.productAmount
                })
              setTotal(totalAmount)
            }   
        }
    }, [storage])
    

    return (
        <>
        <Link href="/cart/">
            <a className="menuItem cartIcon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
                {
                    total !== 0 ? <span>{total}</span> : ""
                }            
            </a>
        </Link>
        </>
    )
}

export default MenuItem