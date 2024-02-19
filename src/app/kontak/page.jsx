import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Kontak = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Kontak Kami</h1>
      </div>
      <h3 className={styles.subtitle}>Mau tanya tanya dulu ?</h3>
        <Link href="https://whatsapp.com" target='_blank'>
          <div className={styles.box}>
            <div className={styles.imageContainer}>
              <Image src="/whatsapp-white.png" width={40} height={40} className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.watsap}>Whatsapp</h3>
            </div>
          </div>
        </Link>
        <h3 className={styles.subtitle}>Mau langsung join ?</h3>
        <Link href="https://forms.gle/uHTdNzEgGToVU5jT7" target='_blank'>
          <div className={styles.box}>
            <div className={styles.textContainer}>
                <h3 className={styles.watsap}>Google Form</h3>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default Kontak