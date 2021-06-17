import { PRODUCTS } from "../schemas/products"
import client from "../client"
import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"
import Link from "next/link"
import styles from "../styles/Shop.module.scss"
import Image from "next/image"


export async function getStaticProps() {
    const {data} = await client.query({
      query: PRODUCTS
    });
    
    return {
        props: {
            data: data?.products?.nodes
        }
    }
}
//update app
  
const Shop = ( {data} ) => {

    return (
        <>
        <Menu></Menu>
        <main className={styles.shop}>
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