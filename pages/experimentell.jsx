import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"

const Experimentell = () => {

    const notification = async () => {
        const acception = await Notification.requestPermission() 
        if (acception === 'granted') {
            const notificate = new Notification("Hallo", {
                body: 'Das ist eine Benachrichtigung',
                icon: 'icons/iconx512.png',
            })
          }
        }

    return(
        <>
        <Menu></Menu>
        <main>
            <button className="displayNotifications" onClick={notification}>Push-Notifikation senden</button>
        </main>
        <Footer></Footer>
        </>
    )
}

export default Experimentell