import React from 'react'
import styles from './member.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Member = () => {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
          <h1>Mengenal Tim Inti Arkanarii</h1>
      </div>
      <div className={styles.row}>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" width={75} height={75} className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.username}>Azka Ramadhan</h3>
            <span className={styles.detail}>..........</span>
          </div>
          <Link href="https://instagram.com/azkzr_" target='_blank'>
            <div className={styles.sosmed}>
                <Image src="/instagram-outline.png" width={16} height={16}/>
            </div>
          </Link>
        </div>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" width={75} height={75} className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.username}>Arya Mahardhika</h3>
            <span className={styles.detail}>Ketua Eksternal</span>
          </div>
          <Link href="https://instagram.com/stardeflinch" target='_blank'>
            <div className={styles.sosmed}>
                <Image src="/instagram-outline.png" width={16} height={16}/>
            </div>
          </Link>
        </div>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" width={75} height={75} className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.username}>Raden Citra</h3>
            <span className={styles.detail}>..........</span>
          </div>
          <Link href="https://instagram.com/__radencitra" target='_blank'>
            <div className={styles.sosmed}>
                <Image src="/instagram-outline.png" width={16} height={16}/>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" width={75} height={75} className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.username}>Tubagus Kinaya</h3>
            <span className={styles.detail}>..........</span>
          </div>
          <Link href="https://instagram.com/katz_una" target='_blank'>
            <div className={styles.sosmed}>
                <Image src="/instagram-outline.png" width={16} height={16}/>
            </div>
          </Link>
        </div>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" width={75} height={75} className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.username}>Zahranisa Ulva</h3>
            <span className={styles.detail}>..........</span>
          </div>
          <Link href="https://instagram.com/jeraanomi" target='_blank'>
            <div className={styles.sosmed}>
                <Image src="/instagram-outline.png" width={16} height={16}/>
            </div>
          </Link>
        </div>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" width={75} height={75} className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.username}>Ghanisa Shabi</h3>
            <span className={styles.detail}>..........</span>
          </div>
          <Link href="https://instagram.com/shxbie__" target='_blank'>
            <div className={styles.sosmed}>
                <Image src="/instagram-outline.png" width={16} height={16}/>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.rowEnd}>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <Image src="/nilou.jpg" width={75} height={75} className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.username}>Muhammad Dinan</h3>
            <span className={styles.detail}>Tim IT & Desain</span>
          </div>
          <Link href="https://instagram.com/mhmddinan_" target='_blank'>
            <div className={styles.sosmed}>
                <Image src="/instagram-outline.png" width={16} height={16}/>
            </div>
          </Link>
        </div>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" width={75} height={75} className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.username}>Rizky Alfaridzi</h3>
            <span className={styles.detail}>..........</span>
          </div>
          <Link href="https://instagram.com/rick_nelson_becker" target='_blank'>
            <div className={styles.sosmed}>
                <Image src="/instagram-outline.png" width={16} height={16}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Member