import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/arkanarii-blue.png" alt="Arkanarii" width={50} height={50}/>
      </div>
      <div className={styles.logo}>arkablog</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/kontak" className={styles.link}>Kontak</Link>
        <Link href="/tentang" className={styles.link}>Tentang</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar