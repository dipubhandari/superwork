import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../components/Hero'
import connection from '@/database/database'
export default function Home() {
  // connection()
  connection(process.env.MONGO_URL || "mongodb://localhost:27017")
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  )
}
