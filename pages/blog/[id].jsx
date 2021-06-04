import client from "../../client"
import { isEmpty } from "lodash"
import { BLOGS } from "../../schemas/blog"
import Footer from "../../components/DOM_Elements/footer"
import Menu from "../../components/DOM_Elements/menu"
import { useEffect, useState } from "react"
import styles from "../../styles/Blog.module.scss"
import Link from "next/link"


export async function getStaticProps({ params }) {

    const {data} = await client.query({
      query: BLOGS,
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
    query: BLOGS
  })

  const pathsData = [];
  data?.posts?.nodes && data?.posts?.nodes.map(  blog => {
      if(!isEmpty( blog?.slug )){
        const pageuri = `${blog?.slug}-${blog?.id}`
        pathsData.push( {params: {id: pageuri }} )
      }
  })
  return {
      paths: pathsData, 
      fallback: false
  }
}


const BlogPage = ( {params, data}) => {
    
  const[post, setPost] = useState("")
  useEffect(() => {
    data?.posts?.nodes.map(content =>{
      if(`${content.slug}-${content.id}` === params.id) {
        setPost(content)
      }
    })
  })

  return (
    <>
    <Menu></Menu>
    <main className={styles.blog}>
      <div className={styles.blogWindow}>
        <div className={styles.singleBlog}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{__html: post.content}}></div>
          <br/>
          <Link href="/blog">
            <a><button>Zurück</button></a>
          </Link>
        </div>
      </div>
    </main>
    <Footer></Footer>
    </>
  )
}
export default BlogPage