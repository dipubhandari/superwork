import styles from '../../styles/portfolio.module.css'
import Image from "next/image"
import work1 from 'public/work2.jpg'
const Portfolio = () => {
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
                    <div className={styles.row}>
                        <Image src={work1} className={styles.picture} height={100} width={100} alt='loading' />
                        <h2 className={styles.workname}>Illustration</h2>
                    </div>
                    {/* first works */}
                    <div className={styles.row}>
                        <Image src={work1} className={styles.picture} height={100} width={100} alt='loading' />
                        <h2 className={styles.workname}>Illustration</h2>
                    </div>

                    {/* first works */}
                    <div className={styles.row}>
                        <Image src={work1} className={styles.picture} height={100} width={100} alt='loading' />
                        <h2 className={styles.workname}>Illustration</h2>
                    </div>

                    {/* first works */}
                    <div className={styles.row}>
                        <Image src={work1} className={styles.picture} height={100} width={100} alt='loading' />
                        <h2 className={styles.workname}>Illustration</h2>
                    </div>
                    {/* first works */}
                    <div className={styles.row}>
                        <Image src={work1} className={styles.picture} height={100} width={100} alt='loading' />
                        <h2 className={styles.workname}>Illustration</h2>
                    </div>
                    {/* first works */}
                    <div className={styles.row}>
                        <Image src={work1} className={styles.picture} height={100} width={100} alt='loading' />
                        <h2 className={styles.workname}>Illustration</h2>
                    </div>   {/* first works */}
                    <div className={styles.row}>
                        <Image src={work1} className={styles.picture} height={100} width={100} alt='loading' />
                        <h2 className={styles.workname}>Illustration</h2>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Portfolio