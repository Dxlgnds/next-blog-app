import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/arkanarii-post.png" alt="" fill className={styles.image} />
        </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            17.02.2024
          </span>
        </div>
        <Link href="/posts/">
          <h1>Arkanarii : Ekstrakurikuler baru di SMA Nasional Bandung</h1>
        </Link>
        <p className={styles.desc}>Ekstrakurikuler Jurnalistik dan Fotografi.</p>
        <div className={styles.desc}/>
        <Link href="/posts/" className={styles.link}>
          Selengkapnya...
        </Link>
      </div>
    </div>
  );
};

export default Card;
