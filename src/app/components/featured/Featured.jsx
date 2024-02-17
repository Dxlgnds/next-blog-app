import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, kami Arkanarii!</b> Jelajahi semua jurnal dan post kreatif kami.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/arkanarii-blue.png" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Apa itu Arkanarii ?</h1>
          <p className={styles.postDesc}>Di ambil dari kata <i>Arkamaya</i> dan <i>Diurnarii</i>, Arkamaya berasal dari bahasa <i>Sansekerta</i> yang berarti <b>Fotografi</b>, Diurnarii berasal dari bahasa <i>Romawi</i> yang berarti <b>Jurnalistik</b>. Arkanarii adalah ekstrakurikuler baru di SMA Nasional yang berfokus pada <b>Jurnalistik dan Fotografi.</b> Kami Meliput dan men - Dokumentasikan kegiatan yang terjadi di lingkungan sekolah.</p>
          <p className={styles.postDesc}>Tertarik ? Bergabung bersama kami dengan cara klik tombol di bawah ini. <br /></p>
          <Link href="/kontak"><button className={styles.button} >Gabung Sekarang</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Featured