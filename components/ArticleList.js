import styles from '../styles/Article.module.css';
import Link from "next/link";

const ArticleList = ({articles}) => {

    const ArticleItem = ({article}) => {
        return (
            <Link href='/article/[id]' as={`/article/${article.id}`}>
                <a className={styles.card}>
                    <h3>{article.title} &rarr;</h3>
                    <p>{article.body}</p>
                </a>
            </Link>
        )
    }

    return (
        <div className={styles.grid}>
            {
                articles.map(article =>{
                    return (
                        <ArticleItem article={article} key={article.id}/>
                    )
                })
            }
        </div>
    )
}

export default ArticleList;