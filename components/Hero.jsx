import React from 'react'
import Image from 'next/image'
import MainImage from 'public/iot.png'
import styles from '../styles/hero.module.css'

const Hero = () => {
    return (
        <>
            <div className={styles.hero_container}>
                <div className={styles.left_hero}>
                    <h1 className={styles.title}>Better Ddesign <br /> for your digital<br /> products.</h1>
                    <p className={styles.slogan}>Turning your idea into reality. We bring together <br /> the teams from the global tech industry.</p>
                    <button className={styles.button}>See Our Works</button>
                </div>
                <div className={styles.right_hero}>
                    <Image src={MainImage} className={styles.image} alt='loading' width={500} height={500} />
                </div>
            </div>
        </>
    )
}

export default Hero