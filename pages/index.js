import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Article from "../components/ArticleList";
import ArticleList from "../components/ArticleList";

export default function Home({articles}) {
    return (
        <div>
            <Head>
                <title>Webdev using Next</title>
                <meta name='keywords' content='web-development'/>
            </Head>
            <h1>Welcome to next</h1>
            <ArticleList articles={articles}/>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/articles')
    const articles = await res.json();

    return {
        props: {
            articles: articles
        }
    }
}


// export const getStaticProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//     const articles = await res.json();
//
//     return {
//         props: {
//             articles: articles
//         }
//     }
// }
