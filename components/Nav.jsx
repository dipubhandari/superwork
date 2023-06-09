import React from 'react'
import Link from 'next/link';
import styles from '../styles/nav.module.css'
import Image from 'next/image';
import logo from 'public/logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}><Image src={logo} width={50} height={50} /></h1>
            <ul className={styles.menu}>
                <Link href='/' className={styles.menulink}>Home</Link>
                <Link href='/portfolio' className={styles.menulink}>Portfolio</Link>
                <Link href='/blog' className={styles.menulink}> Blog</Link>
                <Link href='/about' className={styles.menulink}>About</Link>
                <Link href='/contact' className={styles.menulink}>Contact</Link>
                <Link href='/cart' className={styles.menulink}>Dashboard</Link>
            </ul>
        </header>
    )
}

export default Header
