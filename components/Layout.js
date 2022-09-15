import Nav from './Nav';
import styles from '../styles/Home.module.css';

const Layout = ({children}) => {
    return (
        <div>
            <Nav />
            <div className={styles.container}>

                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout;