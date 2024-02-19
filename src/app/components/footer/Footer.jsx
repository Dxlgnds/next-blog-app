import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/arkanarii-blue.png" alt="Arkanarii" width={50} height={50}/>
          <h1 className={styles.logoText}>Arkanarii</h1>
        </div>
        <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi numquam dolorem nemo amet perferendis modi quaerat facilis quos unde. Voluptates porro possimus, vero harum similique eveniet. Aliquid laudantium vitae eaque.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18}/>
          <Image src="/instagram.png" alt="" width={18} height={18}/>
          <Image src="/tiktok.png" alt="" width={18} height={18}/>
          <Image src="/youtube.png" alt="" width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/anggota">Anggota</Link>
          <Link href="/tentang">Tentang</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">#arkanarii</Link>
          <Link href="/">#jurnalistik</Link>
          <Link href="/">#fotografi</Link>
          <Link href="/">#letsgoo</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
