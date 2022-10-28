import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hadi Tabatabaei</title>
        <meta name="description" content="Hadi Tabatabaei" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hadi Tabatabaei
        </h1>

        <p className={styles.description}>
          Front-End Developer
        </p>
      </main>

      <nav className={styles.nav}>
        <Link href="/resume" className={styles.navLink}>Resume</Link>
        <Link href="/posts" className={styles.navLink}>Posts</Link>
        <Link href="/courses" className={styles.navLink}>Courses</Link>
      </nav>
    </Layout>
  )
}
