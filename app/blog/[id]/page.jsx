import styles from './style.module.css'
import image from 'public/art.jpg'
import Image from 'next/image'

import { notFound } from 'next/navigation';

async function getData(ID) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`, { cache: "no-store" });
    if (!res.ok) {
        notFound()
    }
    return res.json();
}

const page = async ({ params }) => {

    const data = await getData(params.id)
    console.log(data)

    return (
        <div className={styles.our_works}>
            <h1 className={styles.heading}>Blog</h1>
          

            <div className={styles.work_first}>
                <h2 className={styles.art_head}>{data.title}</h2>
                <section className={styles.row}>
                    <section className={styles.left_section}>

                        <p className={styles.info}>
                            {data.body}  {data.body}  {data.body}  {data.body}  {data.body}  {data.body}  {data.body}  {data.body}  {data.body}  {data.body}  {data.body}  {data.body}
                            </p><button className={styles.button}>See more</button>
                    </section>
                    <section className={styles.right_section}>
                        <Image className={styles.art_img} src={image} width={100} height={100} />
                    </section>
                </section>
            </div>

        </div>
    )
}

export default page