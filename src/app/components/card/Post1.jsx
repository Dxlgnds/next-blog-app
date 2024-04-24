import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/29-feb.png" alt="" fill className={styles.image} />
        </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            29.02.2024
          </span>
        </div>
        <Link href="/post-29-februari/">
          <h1>Kedatangan Syeikh asal Palestina di SMA Nasional Bandung</h1>
        </Link>
        <p className={styles.desc}>Pada 29 Februari, SMA Nasional kedatangan tamu istimewa yaitu syeikh asal Palestina : Syeikh Ahmad Taufiq Al - Hajj</p>
        <div className={styles.desc}/>
        <Link href="/post-29-februari/" className={styles.link}>
          Selengkapnya...
        </Link>
      </div>
    </div>
  );
};

export default Card;
