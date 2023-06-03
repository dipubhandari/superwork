import styles from '../../styles/portfolio.module.css'
import Image from "next/image"
import work1 from 'public/work2.jpg'
import Link from 'next/link'
const Portfolio = ({ params }) => {
    console.log(params)
    return (
        <div className={styles.portfolio_container}>

            <section className={styles.heading}>
                <h1>Our Works</h1>
            </section>
            <section className={styles.works}>
                <h2 className={styles.head2}>
                    Choose a Gallery
                </h2>
                <div className={styles.details}>

                    {/* first works */}
                    <Link href="/portfolio/illustration">

                        <div className={styles.row}>
                            <Image src={work1} className={styles.picture} height={100} width={100} alt='loading' />
                            <h2 className={styles.workname}>Illustration</h2>
                        </div>

                    </Link>
                    <Link href="/portfolio/website">

                        <div className={styles.row}>
                            <Image src={work1} className={styles.picture} height={100} width={100} alt='loading' />
                            <h2 className={styles.workname}>Illustration</h2>
                        </div>

                    </Link>

                </div>
            </section>
        </div>
    )
}

export default Portfolio