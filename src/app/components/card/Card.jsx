import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            17.02.2024
          </span>
        </div>
        <Link href="/posts/">
          <h1>99 Bahaya menghina nama bapak orang lain nomor 69 bikin kaget?! 😨😱  </h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis placeat aut quas tempore soluta dolore, ipsa quae.</p>
        <div className={styles.desc}/>
        <Link href="/posts/" className={styles.link}>
          Selengkapnya...
        </Link>
      </div>
    </div>
  );
};

export default Card;