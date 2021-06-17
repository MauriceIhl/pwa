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
        <main className={styles.blog}>
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