import Head from 'next/head'
import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"

const OfflinePage = () => {

return (
  <>
    <Head>
      <title>next-pwa example</title>
    </Head>
    <Menu></Menu>
    <main>
    <h2>Du bist Offline</h2>
    <p>Probiere es später nochmal erneut</p>
    </main>
    <Footer></Footer>
  </>
)
}

export default OfflinePage