import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"
import { BLOGS } from "../schemas/blog"
import client from "../client"
import styles from "../styles/Blog.module.scss"
import Link from "next/link"
import { useState } from "react"


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

    const[installWindow, setInstallWindow] = useState(false)

    const handleInstallGuide = () => {
        setInstallWindow(!installWindow)
    }

  
    return (
        <>
        <Menu></Menu>
        <main className={styles.blog}>
            <div className={styles.installBanner}>
                <div className={styles.innerInstallBanner}>
                    <p>Jetzt auch offline Blogs lesen</p>
                    <button onClick={handleInstallGuide} className={styles.installBtn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 2h6v1h-6v-1zm6-1v-1h-6v1h6zm-5.146 21l-1.854 2h8l-1.854-2h-4.292zm10.146-14h-5v-4h-6v4h-5l8 8 8-8zm-2 11h-12v-6.172l-2-2v10.172h16v-10.172l-2 2v6.172z"/></svg></button>
                </div>
                <div className={installWindow ? styles.installGuideOn : styles.installGuideOff}>
                    <button onClick={handleInstallGuide} className={styles.installBtn}>X</button>
                    <div>
                        <h3>Im Samsung Internet und Google Chrome Browser installieren</h3>
                        <p>1. Im Browser rechts oben 3 Punkte wählen</p>
                        <p>2. Zum Bildschirm hinzufügen</p>
                        <br />
                    </div>
                    <div>
                        <h3>Im Safari Browser unter iOS installierern</h3>
                        <p>1. Im Browser unten das Teilen Icon wählen</p>
                        <p>2. Zum Add-to-Homescreen scrollen</p>
                        <p>3. Zum Bildschirm hinzufügen</p>
                    </div>
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