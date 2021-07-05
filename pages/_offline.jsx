import Head from 'next/head'
import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"

const OfflinePage = () => {

return (
  <>
    <Head>
      <title>Offline Page Test</title>
    </Head>
    <Menu></Menu>
    <main className="fallbackmain">
    <h2>Du bist Offline</h2>
    <p>Probiere es später noch einmal.</p>
    <br/>
    <button type="submit">Neu laden</button>
    <br/>
    </main>
    <Footer></Footer>
  </>
)
}

export default OfflinePage