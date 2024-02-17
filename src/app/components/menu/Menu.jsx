import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { MenuPosts } from '../menuPosts/MenuPosts'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Apa yang lagi viral ?</h2>
      <h1 className={styles.title}>Paling Populer</h1>
      <MenuPosts withImage={false}/>
      <h2 className={styles.subtitle}>Butuh Rekomendasi ?</h2>
      <h1 className={styles.title}>Rekomendasi Blog</h1>
      <MenuPosts withImage={true}/>
    </div>
  )
}

export default Menu