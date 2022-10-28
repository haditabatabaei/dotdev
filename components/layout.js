import styles from '../styles/Layout.module.scss';

export default function Layout({ children }) {
    return <section className={styles.container}>{children}</section>
}