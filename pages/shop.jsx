import { PRODUCTS } from "../schemas/products"
import client from "../client"
import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"
import Link from "next/link"
import styles from "../styles/Shop.module.scss"
import Image from "next/image"
import { useState } from "react"


export async function getStaticProps() {
    const {data} = await client.query({
      query: PRODUCTS
    });
    
    return {
        props: {
            data: data?.products?.nodes
        },
        revalidate: 1,
    }
}
//update app
  
const Shop = ( {data} ) => {

    
    const[permission, setPermission] = useState(false)

    const handlePermission = () => {
        if(!permission ) {
            setPermission(true)
            
        } else {
            setPermission(false)
        }
    }

    const notification = async () => {
        const acception = await Notification.requestPermission() 
        if (acception === 'granted' && permission) {
            const notificate = new Notification("Hallo", {
                body: 'Das ist eine Benachrichtigung',
                icon: 'icons/iconx512.png',
            })
          } 
        }


    return (
        <>
        <Menu></Menu>
        <main className={styles.shop}>
        <div className={styles.notificationBanner}>
                    <h3>Nutze unsere Benachrichtigungen</h3>
                    <p>Aktiviere gern unsere Benachrichtigungen, um keine Trends, Rabattaktionen und Blogbeiträge zu verpassen.</p>
                    <div className={styles.rowNotifacte}>
                    <button onClick={handlePermission} className={styles.toggleBtn}>B</button>
                        <div className={!permission ? styles.toggleOff : styles.toggleOn}></div>
                        {
                            permission ? <button onClick={notification} className={styles.pushBtn}>Testen</button> :""
                        }
                    </div>
            </div>
            <div className={styles.shopWindow}>
            <div className="oneEm"><h1>Shop</h1></div>
                <div className={styles.itemWindow}>
                {
                    data.map(product => {
                    return(
                        <div className={styles.productPreview} key={product.id}>
                            <Link href={`/shop/${product.slug}`}>
                                <a><Image src={product.image.sourceUrl} alt={product.altText} className={styles.shopImg} height="400" width="400"/></a>  
                            </Link>
                            <div className={styles.productSpecs}>
                                <span><strong>{product.name}</strong></span>
                                <span>{product.price}</span>
                                <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                            </div>
                        </div>
                    )})
                }
                </div>
            </div>
        </main>
        <Footer></Footer>
        </>

    )
}

export default Shop