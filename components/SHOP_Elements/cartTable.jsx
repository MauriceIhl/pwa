import { Context } from "../../components/context"
import { useContext, useEffect } from "react"
import style from "../../styles/Cart.module.scss"
import Link from "next/link"


const CartTable = () => {
    const{storage, setStorage, cart, setCart, total, setTotal} = useContext( Context )

    // get data back after page refresh 
    useEffect(() => {
        if(process.browser) {
            let storeCart = localStorage.getItem("Cart")
            let totalAmount = localStorage.getItem("TotalCartAmount")
            storeCart = JSON.parse( storeCart )
            totalAmount  = JSON.parse( totalAmount )
            setCart( storeCart )
            setTotal( totalAmount )
        }
    }, [storage])
 

    const removeItem = (name) => {
        let copyCart = cart
        copyCart = copyCart.filter(it => it.name !== name)
        setCart([...copyCart])
        let total = 0
        copyCart.map(it => {
            total += parseFloat(it.price * it.productAmount)  
        })
        setTotal(total)
        setStorage(true)
    }

    // upadete local storage after remove Item from cart
    useEffect(() => {
        if(storage) {
            localStorage.setItem("Cart", JSON.stringify(cart))
            localStorage.setItem("TotalCartAmount", JSON.stringify(total))
            setStorage(false)
        }
    }, [storage])


    const handleCartAmount = (value, index) => {
        if(value > 0 && value < 99) {
            let copyCart = cart
            copyCart[index].productAmount = parseInt(value)
            copyCart[index].total = parseFloat(copyCart[index].price*parseInt(value))
            setCart(copyCart)
            let total = 0
            copyCart.map(it => {
                total += parseFloat(it.price * it.productAmount) 
            })
            setTotal(total)
            setStorage(true)
        }
    }

    return (
        <div className={style.itemList}>
            { cart?.length > 0 ? <>
            <div className="oneEm">
            <table>
                    <thead>
                        <tr key={"tablehead"}>
                            <th/><th  className={style.thDesktop}/><th>Produkt</th><th>Preis</th> <th>Anzahl</th><th>Summe</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map((item, index) => {
                            return (<tr className={style.item} key={item.id}>
                                        <td><button onClick={() => removeItem(item.name)} className={style.removeBtn}>x</button></td>
                                        <td className={style.imgCart}><img src={item.image}/></td>
                                        <td>{item.name}</td>
                                        <td>{`€${item.price?.toFixed(2)}`}</td>
                                        <td><select type="number" onChange={e => handleCartAmount(e.target.value, index)} value={item.productAmount > 0 ? item.productAmount : 1} className="productAmount">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select></td>
                                        <td>{`€${item.total ? item.total?.toFixed(2) : item.price}`}</td>
                                    </tr>)
                        })
                    }
                 </tbody>
            </table>
            </div>   
            <div className="oneEm">
                <div className={style.total}>
                    <span className={style.totalTitle}><h2>Warenkorb-Summe</h2></span>
                    <div className={style.totalAmount}>
                        <span>Betrag</span>
                        <span>{`€${total ? total?.toFixed(2) : ""}`}</span>
                    </div>
                </div>
                <div className={style.totalBtnSection}>
                    <Link href="/shop/"><a className={style.backToShop}>Zum Shop</a></Link>
                    <Link href="/checkout/"><a><button>Bestellen</button></a></Link>
               </div>
            </div>
            </>
            : <div className="oneEm">Keine Produkte im Warenkorb</div>}
        </div>
    )

}

export default CartTable