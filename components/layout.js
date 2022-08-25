import styles from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <main>{children}</main>
        </div>
    )
}

export default Layout