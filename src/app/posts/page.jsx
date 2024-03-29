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
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
        </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <h1>Arkanarii : Jurnalistik dan Fotografi</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, necessitatibus. Laboriosam obcaecati illo corrupti nulla cupiditate earum, iure quas deleniti molestiae ullam? Rem molestiae at harum iste. Quae, officiis ad?</p>
                        <h2>Siapa pencetus arkanarii ?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia iure at provident nulla voluptatum maxime ratione aut voluptatibus soluta quibusdam sed, vel necessitatibus laboriosam dolorum excepturi et quis repudiandae saepe.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia iure at provident nulla voluptatum maxime ratione aut voluptatibus soluta quibusdam sed, vel necessitatibus laboriosam dolorum excepturi et quis repudiandae saepe.</p>
                    </div>
                </div>
                <Menu/>
            </div>
    </div>
  )
}

export default SinglePage
