import AddToCart from "../../components/Functions/cart"
import { useState } from "react"
import styles from "../../styles/SingleProduct.module.scss"
import Image from "next/image" 

const SingleProduct = ( {product, suggestions} ) => {

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
                        <input type="number" inputMode="numeric" onChange={e => handleAmount(e.target.value)} value={amount} min="1"/>
                        <AddToCart product={product} amount={amount}></AddToCart>  
                    </div>
                </div>  
            </div> : ""
            }
            <div className={styles.desc}>
                <span><strong>Beschreibung</strong></span>
                <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                <h2>Ähnliche Produkte</h2>
            </div>
            <div className={styles.suggesionSection}>
            {
                suggestions ? suggestions.map(suggestion => {
                    return (
                        <div key={suggestion.id} className={styles.suggestion}>
                            <a href={`/shop/${suggestion.slug}`}>
                                <Image src={suggestion.image.sourceUrl} alt={suggestion.altText} className={styles.previewImage} height="250" width="250"/>
                            </a>
                            <div className={styles.productSpecsPreview}>
                                <span>{suggestion.name}</span>
                                <span>{suggestion.price}</span>
                                <div dangerouslySetInnerHTML={{ __html: suggestion.description }}></div>
                            </div>
                        </div>
                    )
                } ) : ""
            }
            </div>
        </div>
    )
}

export default SingleProduct