import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"
import { BLOGS } from "../schemas/blog"
import client from "../client"
import styles from "../styles/Blog.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react"


export async function getStaticProps() {
    const {data} = await client.query({
      query: BLOGS
    });
    
    return {
        props: {
            data: data?.posts?.nodes
        }
    }
}

const Blog = ({data}) => {

    const[permission, setPermission] = useState(false)

    //localStorage.setItem("TotalCartAmount", JSON.stringify(total))

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
        <main className={styles.blog}>
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
            <div className={styles.blogWindow}>
            {
                data ? data.map( post => {
                    return(
                        <div className={styles.blogPreview} key={post.id}>
                            <h2>{post.title}</h2>
                            <div dangerouslySetInnerHTML={{__html: post.excerpt}} className={styles.bloginnerHTML}></div>
                            <br />
                            <Link href={`/blog/${post.slug}-${post.id}`}>
                                <a>{">> Weiterlesen"}</a>
                            </Link>
                        </div>
                    )
                }) : "Noch keine Posts"
            }
            </div>
        </main>
        <Footer></Footer>
        </>
    )
}

export default Blog 