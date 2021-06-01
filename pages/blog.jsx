import Menu from "../components/DOM_Elements/menu"
import Footer from "../components/DOM_Elements/footer"
import { BLOGS } from "../schemas/blog"
import client from "../client"
import styles from "../styles/Blog.module.scss"
import Link from "next/link"


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

    return (
        <>
        <Menu></Menu>
        <main>
            {
                data ? data.map( post => {
                    return(
                        <div className={styles.blogs} key={post.id}>
                            <div dangerouslySetInnerHTML={{__html: post.excerpt}} className={styles.bloginnerHTML}></div>
                            <Link href={`/blog/${post.slug}-${post.id}`}>
                                <a>{">> Zum Beitrag"}</a>
                            </Link>
                        </div>
                    )
                }) : "Noch keine Posts"
            }
        </main>
        <Footer></Footer>
        </>
    )
}

export default Blog 