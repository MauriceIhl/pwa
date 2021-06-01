import Head from 'next/head'
import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"
import { HOME } from "../schemas/home"
import client from "../client"
import styles from "../styles/Home.module.scss"



export async function getStaticProps() {
  const {data} = await client.query({
    query: HOME
  });
  
  return {
      props: {
          data: data?.pageBy?.content
      }
  }
}


export default function Home({data}) {
  return (
    <>
      <Head>
        
      </Head>
      <Menu></Menu>
      <main className={styles.home}>
        <div dangerouslySetInnerHTML={{__html: data}} className={styles.innerHTML}></div>
      </main>
      <Footer></Footer>
    </>
  )
}
