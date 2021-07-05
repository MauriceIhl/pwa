import AddToCart from "../../components/Functions/cart"
import { useState } from "react"
import styles from "../../styles/SingleProduct.module.scss"
import Image from "next/image" 
import Link from "next/link"

const SingleProduct = ( {product} ) => {

    const[amount, setAmount] = useState(1)
    const handleAmount = ( value ) => {
        if(value > 0 && value < 99) {
            setAmount(value)
        }
    }

    return (
        <div className={styles.product}>
            { product ?
            <div className={styles.singleProduct}>
                 <div className={styles.productImgDes} key={product.id}>
                    <Image src={product.image.sourceUrl} alt={product.altText} height="400" width="400"/>
                </div>
                <div className={styles.productSpecs}>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>
                    <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                    <div>
                        <select type="number" onChange={e => handleAmount(e.target.value)} value={amount} className="productAmount">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <AddToCart product={product} amount={amount}></AddToCart>  
                    </div>
                </div>  
            </div> : ""
            }
            <div className={styles.desc}>
                <span><strong>Beschreibung</strong></span>
                <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
            </div>
            <div>
                <Link href={"/shop"}>
                    <button>Zurück zum Shop</button>
                </Link>
                <br />
            </div>
        </div>
    )
}

export default SingleProduct