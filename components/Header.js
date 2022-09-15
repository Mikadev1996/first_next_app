import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>
                <span>WebDev</span>
                <p>News</p>
            </h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis consectetur consequatur dolor</p>
        </div>
    )
}

export default Header;