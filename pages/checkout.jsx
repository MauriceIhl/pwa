import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"
import CheckoutForm from "../components/SHOP_Elements/checkoutForm"
import CheckoutPayment from "../components/SHOP_Elements/checkoutPayment"
import styles from "../styles/Shop.module.scss"

const Checkout = () => {

    // Stripe Functions goes here

    return(
    <div>
        <Menu></Menu>
        <main className={styles.shop}>
            <div className={styles.shopWindow}>
                <div className="oneEm"><h1>Checkout</h1></div>
                <div className={styles.checkout}>
                   <CheckoutForm></CheckoutForm>
                   <CheckoutPayment></CheckoutPayment>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
    )
}

export default Checkout 