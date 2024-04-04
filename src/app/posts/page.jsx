import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '../components/menu/Menu'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Arkanarii : Ekstrakurikuler baru di SMA Nasional Bandung</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                    <Image src="/nilou.jpg" alt="" fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Muhammad Dinan</span>
                        <span className={styles.date}>17.02.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/arkanarii-post.png" alt="" fill className={styles.image} />
            </div>
        </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <h1>Arkanarii : Jurnalistik dan Fotografi</h1>
                        <p>Ekstrakurikuler baru di SMA Nasional Bandung</p>
                        <h2>Filosofi Arkanarii</h2>
                        <p>Di ambil dari kata Arkamaya dan Diurnarii, Arkamaya berasal dari bahasa Sansekerta yang berarti Fotografi, Diurnarii berasal dari bahasa Romawi yang berarti Jurnalistik. Arkanarii adalah ekstrakurikuler baru di SMA Nasional yang berfokus pada Jurnalistik dan Fotografi. Kami Meliput dan men - Dokumentasikan kegiatan yang terjadi di lingkungan sekolah.</p>
                    </div>
                </div>
                <Menu/>
            </div>
    </div>
  )
}

export default SinglePage
