import Nav from './Nav';
import styles from '../styles/Home.module.css';
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout;