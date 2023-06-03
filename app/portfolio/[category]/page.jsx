import styles from './style.module.css'
import image from 'public/art.jpg'
import Image from 'next/image'
const page = ({ params }) => {

    return (
        <div className={styles.our_works}>
            <h1 className={styles.heading}>Our Works</h1>
            <h5 className={styles.art_name}>{params.category}</h5>

            <div className={styles.work_first}>
                <section className={styles.row}>
                    <section className={styles.left_section}>
                        <h2 className={styles.art_head}>Creative Porfolio</h2>
                        <p className={styles.info}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, ut! Ad praesentium incidunt assumenda nihil eos, quas unde nisi?</p>
                        <button className={styles.button}>See more</button>
                    </section>
                    <section className={styles.right_section}>
                        <Image className={styles.art_img} src={image} width={500} height={500} />
                    </section>
                </section>
            </div>
            <div className={styles.work_section}>

                <section className={styles.sec_row}>
                    <section className={styles.left_section}>
                        <h2 className={styles.art_head}>Creative Porfolio</h2>
                        <p className={styles.info}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, ut! Ad praesentium incidunt assumenda nihil eos, quas unde nisi?</p>
                        <button className={styles.button}>See more</button>
                    </section>
                    <section className={styles.right_section}>
                        <Image className={styles.art_img} src={image} width={500} height={500} />
                    </section>
                </section>
            </div>
        </div>
    )
}

export default page