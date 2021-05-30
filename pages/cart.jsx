import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"
import CartTable from "../components/SHOP_Elements/cartTable"
import styles from "../styles/Shop.module.scss"

const CartOverview = () => {
    
    return (
        <>
        <Menu></Menu>
        <main className={styles.shop}>
            <div className={styles.shopWindow}>
                <div className="oneEm"><h1>Warenkorp</h1></div>
                 <CartTable></CartTable>
            </div>
        </main>
        <Footer></Footer>
        </>
    )
}

export default CartOverview