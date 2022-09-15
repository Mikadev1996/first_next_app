import {useRouter} from "next/router";
import Link from "next/link";


const article = ({article}) => {
    // const router = useRouter();
    // const { id } = router.query;

    return (
        <div>
            <h1>This is an article {article.id}</h1>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <hr/>
            <Link href='/'>Go Back</Link>
        </div>
    )
}

export const getStaticProps = async (context) => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const res = await fetch(`http://localhost:3000/api/articles/${context.params.id}`)
    const article = await res.json();

    return {
        props: {
            article: article
        }
    }
}

export const getStaticPaths = async () => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const res = await fetch(`http://localhost:3000/api/articles`)
    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths: paths,
        fallback: false
    }
}

export default article;