import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/Nav'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Hero/>
    </main>
  )
}
