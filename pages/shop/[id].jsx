import client from "../../client"
import { isEmpty } from "lodash"
import { PRODUCTS } from "../../schemas/products"
import SingleProduct from "../../components/SHOP_Elements/singleProduct"
import Footer from "../../components/DOM_Elements/footer"
import Menu from "../../components/DOM_Elements/menu"
import { useEffect, useState } from "react"
import styles from "../../styles/Shop.module.scss"
import { useRouter } from 'next/router'


export async function getStaticProps({ params }) {
  
    const {data} = await client.query({
      query: PRODUCTS,
      variables: {
        uri: params?.id
      }
    });
  
    return {
      props: {
        params,
        data
      },
      revalidate: 1
    }
  }


  export async function getStaticPaths() {
    const { data } = await client.query({
    query: PRODUCTS
  })


  const pathsData = [];
  data?.products?.nodes && data?.products?.nodes.map(  product => {
      if(!isEmpty( product?.slug )){
        const pageuri = product?.slug
        pathsData.push( {params: {id: pageuri }} )
      }
  })

  return {
      paths: pathsData, 
      fallback: true
  }
}

const ProductPage = ({params, data}) => {

  const products = data?.products?.nodes
  const [suggestions, setSuggestions] = useState([])
  const [singleProduct, setSingleProduct] = useState("")

  useEffect(() => {
    setSuggestions("")
    products.map(product => {
      if(params.id == product.slug) {
        setSingleProduct(product)
      } else {
        setSuggestions(suggestions => [...suggestions, product])
      }
    })
  }, [singleProduct])

  const router = useRouter()
  if (router.isFallback) {
    return <div>Du bist Offline</div>
  }  

  return (
    <>
    <Menu></Menu>
    <main className={styles.shop}>
        <div className={styles.shopWindow}>
            <SingleProduct product={singleProduct} suggestions={suggestions}></SingleProduct>
        </div>
    </main>
    <Footer></Footer>
    </>
  )
}
export default ProductPage