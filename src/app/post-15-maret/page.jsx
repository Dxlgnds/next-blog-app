import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '../components/menu/Menu'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Jurnal 15 Maret : Pembukaan Acara SMARTTREN di SMA Nasional Bandung</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                    <Image src="/nilou.jpg" alt="" fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Muhammad Dinan</span>
                        <span className={styles.date}>15.03.2024</span>
                    </div>
                </div>
                <div className={styles.mblImg}>
                        <Image src="/15-mar.png" alt="" fill className={styles.imgMbl} />
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/15-mar.png" alt="" fill className={styles.image} />
            </div>
        </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <h2>Pembukaan SMARTTREN</h2>
                        <p>Pada 15 Maret, SMA Nasional mengadakan Acara pembukaan SMARTTREN & Kedatangan Ust. Nana Gerhana. Simak keseruan nya di bawah ini !</p>
                        <h2>Wawancara bersama Ustadz Nana Gerhana</h2>
                        <p>Kami melakukan wawancara bersama Ustadz Nana Gerhana dengan beberapa pertanyaan seputar Acara SMARTTREN, diantaranya :</p>
                        <h2>Selengkapnya di Channel Youtube Kami :</h2>
                        <div className={styles.videos}>
                        <iframe
                            src="https://www.youtube.com/embed/c_wKILcqI8k"
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
