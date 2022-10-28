import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import FlexContainer from '../components/flexContainer'
import Meta from '../components/meta'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Meta title="Home" description="Home" />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hadi Tabatabaei
        </h1>

        <p className={styles.description}>
          Front-End Developer
        </p>
      </main>

      <FlexContainer as="nav" alignItems="center" justifyContent="center" className={styles.nav} gap={12}>
        <Link href="/resume" className={styles.navLink}>Resume</Link>
        <Link href="/posts" className={styles.navLink}>Posts</Link>
        <Link href="/courses" className={styles.navLink}>Courses</Link>
      </FlexContainer>
    </Layout>
  )
}
