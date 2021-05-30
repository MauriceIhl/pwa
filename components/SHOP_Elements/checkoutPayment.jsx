import styles from "../../styles/Checkout.module.scss"
import { Context } from "../context"
import { useState, useEffect } from "react"

const CheckoutPayment = () => {
        const[cart, setCart] = useState()
        const[amount, setAmount] = useState()
  
    useEffect(() => {
        let storeCart = localStorage.getItem("Cart")
        let totalAmount = localStorage.getItem("TotalCartAmount")
        storeCart = JSON.parse( storeCart )
        totalAmount  = JSON.parse( totalAmount )

        setAmount(totalAmount)
        setCart(storeCart)
    })

    console.log(cart)


    return (
        <div className={styles.paymentSection}>
            <div className={styles.borderPayment}>
                <h3>Deine Bestellung</h3>
                <div className="table">
                    <div>
                        <span>Produkt</span>
                        <span>Zwischensumme</span>
                    </div>
                
                {
                    cart ? cart.map(item => {
                        return (
                            <div key={item.id}>
                                <span>{`${item.name} x${item.productAmount}`}</span>
                                <span>{`€${item.total}`}</span>
                            </div>
                            
                        )
                    }) : ""
                }
                    <div>
                        <span>Gesamtsumme</span>
                        <span>{`€${amount}`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPayment