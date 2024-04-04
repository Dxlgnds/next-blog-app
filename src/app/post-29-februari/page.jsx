import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '../components/menu/Menu'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Jurnal 29 Februari : Kedatangan Syeikh asal Palestina di SMA Nasional Bandung</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                    <Image src="/nilou.jpg" alt="" fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Muhammad Dinan</span>
                        <span className={styles.date}>29.02.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/29-feb.png" alt="" fill className={styles.image} />
            </div>
        </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <h1>Kedatangan Syeikh Ahmad Taufiq Al - Hajj di SMA Nasional Bandung</h1>
                        <p>Pada 29 Februari, SMA Nasional kedatangan tamu istimewa yaitu syeikh asal Palestina : Syeikh Ahmad Taufiq Al - Hajj. Simak wawancara nya di bawah ini !</p>
                        <h2>Wawancara Tentang Palestina</h2>
                        <p>Kami melakukan wawancara bersama Syeikh Ahmad Taufiq Al - Hajj dengan beberapa pertanyaan seputar keadaan di Palestina, diantaranya :</p>
                        <p>Selengkapnya di Channel Youtube Kami :</p>
                        <div className={styles.videos}>
                        <iframe
                            src="https://www.youtube.com/embed/mL97SFgh6pU"
                            className={styles.iframe}
                            frameborder="0"
                            allowfullscreen
                        />
                        </div>
                    </div>
                </div>
                <Menu/>
            </div>
    </div>
  )
}

export default SinglePage
